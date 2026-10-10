import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import en from '../locales/en'
import ja from '../locales/ja'
import zhTW from '../locales/zh-TW'
import { renderComponent, textContent } from '../test-utils/renderComponent'
import ProjectDetail from './ProjectDetail.vue'

const HEADING_KEYS = [
  'overview',
  'problem',
  'role',
  'architecture',
  'tradeoffs',
  'outcomes',
  'links'
]
const render = locale =>
  renderComponent(
    { render: () => h(ProjectDetail, { slug: 'kserve' }) },
    { locale }
  )

describe.each([
  ['zh-TW', zhTW],
  ['en', en],
  ['ja', ja]
])('KServe project detail page in %s', (locale, messages) => {
  const copy = messages.projectDetail

  it('titles the page with the project name', async () => {
    const html = await render(locale)
    expect(textContent(html.match(/<h1[^>]*>(.*?)<\/h1>/s)[1])).toBe(
      copy.kserve.title
    )
  })

  it('follows the project detail template headings in order', async () => {
    const html = await render(locale)
    const headings = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gs)].map(
      ([, text]) => textContent(text)
    )
    expect(headings).toEqual(HEADING_KEYS.map(key => copy.headings[key]))
  })

  it('links every pull request and issue it describes', async () => {
    const html = await render(locale)
    for (const path of [
      'pull/4687',
      'pull/5198',
      'issues/3919',
      'issues/5057'
    ]) {
      expect(html).toContain(`href="https://github.com/kserve/kserve/${path}"`)
    }
    expect(textContent(html)).toContain(
      messages.projects.featured.status.merged
    )
    expect(textContent(html)).toContain(messages.projects.featured.status.open)
  })

  it('links back to the Projects page', async () => {
    const html = await render(locale)
    expect(html).toMatch(
      new RegExp(
        `<a[^>]*href="/projects"[^>]*>\\s*(<[^>]+>\\s*)*${copy.backToProjects}`
      )
    )
  })

  it('renders no raw translation keys', async () => {
    expect(textContent(await render(locale))).not.toMatch(
      /projectDetail\.|caseStud|meta\./
    )
  })
})

describe('project detail wording', () => {
  it.each([
    ['zh-TW', zhTW, /案例研究/],
    ['en', en, /case stud/i],
    ['ja', ja, /ケーススタディ/]
  ])(
    'never calls the page a case study in %s',
    (_locale, messages, pattern) => {
      expect(JSON.stringify(messages)).not.toMatch(pattern)
    }
  )

  it.each([
    ['zh-TW', zhTW, '查看專案介紹'],
    ['en', en, 'View project details'],
    ['ja', ja, 'プロジェクトの詳細を見る']
  ])(
    'labels the card link as project details in %s',
    (_locale, messages, label) => {
      expect(messages.projectDetail.viewDetails).toBe(label)
    }
  )
})
