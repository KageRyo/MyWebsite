import { describe, expect, it } from 'vitest'
import { renderComponent, textContent } from '../test-utils/renderComponent'
import About from './About.vue'
import Contact from './Contact.vue'
import Home from './Home.vue'
import Projects from './Projects.vue'

const HEADLINE = 'Backend / Platform Engineer | AI Systems / MLOps'

// 每頁頂部的大標題下方那一行
const bannerSubtitle = html => {
  const afterTitle = html.slice(html.indexOf('</h1>') + '</h1>'.length)
  const match = afterTitle.match(
    /<(div|p)[^>]*class="ts-text is-secondary"[^>]*>(.*?)<\/\1>/s
  )
  return textContent(match?.[2] ?? '')
}

describe.each([
  ['Home', Home],
  ['About', About],
  ['Projects', Projects],
  ['Contact', Contact]
])('%s page banner', (_name, page) => {
  it.each(['zh-TW', 'en', 'ja'])(
    'shows the career headline in %s',
    async locale => {
      const html = await renderComponent(page, { locale })

      expect(bannerSubtitle(html)).toBe(HEADLINE)
      expect(html).not.toContain(
        'Developer, Programmer, and Student in TAIWAN.'
      )
    }
  )
})
