import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import { renderComponent, textContent } from '../../test-utils/renderComponent'
import ProjectMedia from './ProjectMedia.vue'

// 測試用的圖片與報導；說明文字借用既有的翻譯鍵，確認元件會翻譯它們
const image = name => ({
  src: `/assets/img/${name}.webp`,
  width: 1600,
  height: 900,
  altKey: 'projectDetail.kserve.title',
  captionKey: 'projectDetail.kserve.contributions.logging',
  credit: { label: 'KServe', url: 'https://kserve.github.io/website/' }
})

const article = {
  source: 'Example News',
  date: '2026-03-04',
  title: 'Example headline',
  lang: 'en',
  url: 'https://example.com/story'
}

const render = (props, locale = 'en') =>
  renderComponent({ render: () => h(ProjectMedia, props) }, { locale })

describe('ProjectMedia', () => {
  it('renders nothing without media or coverage', async () => {
    expect(textContent(await render({}))).toBe('')
  })

  it.each([1, 3])(
    'shows %i captioned image(s) with size, alt text and credit',
    async count => {
      const media = Array.from({ length: count }, (_, index) =>
        image(`shot-${index}`)
      )
      const html = await render({ media })
      const figures = [...html.matchAll(/<figure[^>]*>(.*?)<\/figure>/gs)].map(
        ([, figure]) => figure
      )

      expect(figures).toHaveLength(count)
      for (const figure of figures) {
        expect(figure).toMatch(
          /<img[^>]*width="1600"[^>]*height="900"[^>]*alt="Contributing to KServe \(CNCF\)"[^>]*loading="lazy"/
        )
        expect(textContent(figure)).toContain('Logging configuration fix')
        expect(figure).toMatch(
          /<a[^>]*href="https:\/\/kserve\.github\.io\/website\/"[^>]*target="_blank"[^>]*rel="noopener noreferrer"[^>]*>KServe<\/a>/
        )
      }
    }
  )

  it('lists coverage with its source, date and an external link to the story', async () => {
    const html = await render({
      coverage: [article, { ...article, url: 'https://example.com/second' }]
    })
    const rows = html.match(/<li[\s>]/g)

    expect(rows).toHaveLength(2)
    expect(html).toMatch(
      /<a[^>]*href="https:\/\/example\.com\/story"[^>]*target="_blank"[^>]*rel="noopener noreferrer"[^>]*lang="en"[^>]*>Example headline<\/a>/
    )
    expect(textContent(html)).toContain('Example News')
    expect(textContent(html)).toContain('Mar 4, 2026')
  })

  it('formats coverage dates for the current language', async () => {
    expect(
      textContent(await render({ coverage: [article] }, 'zh-TW'))
    ).toContain('2026年3月4日')
  })
})
