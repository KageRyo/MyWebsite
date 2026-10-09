import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'
import en from '../src/locales/en'
import ja from '../src/locales/ja'
import zhTW from '../src/locales/zh-TW'
import { renderRouteHtml, staticRoutes, toPlainText } from './route-html.mjs'

const indexHtml = readFileSync(
  new URL('../index.html', import.meta.url),
  'utf8'
)
const metaContent = (html, selector) =>
  html.match(new RegExp(`<meta ${selector} content="([^"]*)">`))?.[1]

describe('index.html defaults', () => {
  it('match the zh-TW home metadata', () => {
    expect(indexHtml).toContain(
      `<title>${toPlainText(zhTW.meta.home.title)}</title>`
    )
    expect(metaContent(indexHtml, 'name="description"')).toBe(
      zhTW.meta.home.description
    )
  })
})

describe('renderRouteHtml', () => {
  it('replaces title, description, Open Graph, and canonical URL', () => {
    const html = renderRouteHtml(indexHtml, {
      title: 'About & "more"',
      description: 'Line <one>',
      url: 'https://kageryo.coderyo.com/about'
    })

    expect(html).toContain('<title>About &amp; &quot;more&quot;</title>')
    expect(metaContent(html, 'name="description"')).toBe('Line &lt;one&gt;')
    expect(metaContent(html, 'property="og:title"')).toBe(
      'About &amp; &quot;more&quot;'
    )
    expect(metaContent(html, 'property="og:url"')).toBe(
      'https://kageryo.coderyo.com/about'
    )
    expect(html).toContain(
      '<link rel="canonical" href="https://kageryo.coderyo.com/about">'
    )
  })

  it('has metadata for every generated route', () => {
    for (const { key } of staticRoutes) {
      expect(zhTW.meta[key]).toMatchObject({
        title: expect.any(String),
        description: expect.any(String)
      })
    }
  })

  it('fails loudly when a tag is missing', () => {
    expect(() =>
      renderRouteHtml('<html></html>', {
        title: 'a',
        description: 'b',
        url: 'c'
      })
    ).toThrow(/Missing tag/)
  })
})

describe('home titles', () => {
  it('render a literal pipe through vue-i18n', () => {
    const messages = { 'zh-TW': zhTW, en, ja }
    const i18n = createI18n({ legacy: false, locale: 'en', messages })

    for (const [locale, localeMessages] of Object.entries(messages)) {
      i18n.global.locale.value = locale
      const title = i18n.global.t('meta.home.title')
      expect(title).toBe(toPlainText(localeMessages.meta.home.title))
      expect(title).toContain(' | ')
    }
  })
})
