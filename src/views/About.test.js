import { describe, expect, it } from 'vitest'
import { renderComponent } from '../test-utils/renderComponent'
import About from './About.vue'

describe.each(['zh-TW', 'en', 'ja'])('About page in %s', locale => {
  it('numbers its sections in reading order', async () => {
    const html = await renderComponent(About, { locale })
    const numbers = [
      ...html.matchAll(/class="section-kicker-index">(\d+)</g)
    ].map(([, number]) => number)

    expect(numbers).toEqual(['01', '02', '03', '04', '05'])
  })

  it('names every section after its own h2', async () => {
    const html = await renderComponent(About, { locale })
    const labelledBy = [
      ...html.matchAll(/<section[^>]*aria-labelledby="([^"]+)"/g)
    ].map(([, id]) => id)

    expect(labelledBy).toHaveLength(5)
    for (const id of labelledBy) {
      expect(html).toMatch(new RegExp(`<h2[^>]*id="${id}"`))
    }
  })

  it('separates sections with whitespace and dividers instead of bordered boxes', async () => {
    const html = await renderComponent(About, { locale })

    expect(html).not.toMatch(/\bts-box\b/)
    expect(html).not.toMatch(/\bts-timeline\b/)
  })
})
