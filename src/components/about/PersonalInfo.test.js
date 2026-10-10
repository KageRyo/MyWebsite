import { describe, expect, it } from 'vitest'
import { renderComponent, textContent } from '../../test-utils/renderComponent'
import PersonalInfo from './PersonalInfo.vue'

describe('PersonalInfo', () => {
  it('leads the profile with education instead of gender and age', async () => {
    const html = await renderComponent(PersonalInfo)
    const iconsetTitles = [
      ...html.matchAll(/class="title"[^>]*>([^<]*)</g)
    ].map(([, title]) => title.trim())

    expect(iconsetTitles).toEqual(['學歷'])
  })

  it('shows gender and age in a secondary line after the resume link', async () => {
    const text = textContent(await renderComponent(PersonalInfo))

    expect(text).toMatch(/性別：男\s+年齡：\d+/)
    expect(text.indexOf('性別：男')).toBeGreaterThan(
      text.indexOf('下載英文履歷（PDF）')
    )
  })

  it('offers the resume PDF and the GitHub profile next to the introduction', async () => {
    const html = await renderComponent(PersonalInfo)

    expect(html).toMatch(
      /<a[^>]*href="\/resume\/Chien-Hsun_Chang_Resume\.pdf"[^>]*download/
    )
    expect(html).toMatch(
      /<a[^>]*href="https:\/\/github\.com\/KageRyo"[^>]*target="_blank"[^>]*rel="noopener noreferrer"/
    )
  })

  it.each([
    ['en', /Gender: Male · Age: \d+/],
    ['ja', /性別：男性・年齢：\d+/]
  ])('translates the secondary line in %s', async (locale, pattern) => {
    expect(
      textContent(await renderComponent(PersonalInfo, { locale }))
    ).toMatch(pattern)
  })
})
