import { describe, expect, it } from 'vitest'
import en from '../../locales/en'
import ja from '../../locales/ja'
import zhTW from '../../locales/zh-TW'
import { education, experience } from '../../config/resume'
import { renderComponent, textContent } from '../../test-utils/renderComponent'
import ResumeSection from './ResumeSection.vue'

const section = (html, id) =>
  html.match(
    new RegExp(`<section[^>]*aria-labelledby="${id}"[^>]*>(.*?)</section>`, 's')
  )[1]

// 只取最外層的 <li>，經歷重點的巢狀清單另外比對
const entries = (html, listClass) => {
  const list = html.match(
    new RegExp(`<(ul|ol) class="${listClass}"[^>]*>(.*)</\\1>`, 's')
  )[2]
  return list.split(/<li class="[^"]*-entry"[^>]*>/).slice(1)
}

const headingText = html => textContent(html.match(/<h3[^>]*>(.*?)<\/h3>/s)[1])

describe.each([
  ['zh-TW', zhTW],
  ['en', en],
  ['ja', ja]
])('ResumeSection in %s', (locale, messages) => {
  const copy = messages.about.resume

  it('lists every education entry with its period, school and degree', async () => {
    const html = section(
      await renderComponent(ResumeSection, { locale }),
      'about-education'
    )
    const items = entries(html, 'education-list')

    expect(items).toHaveLength(education.length)
    items.forEach((item, index) => {
      const { period, school, degree } =
        copy.education.items[education[index].id]
      expect(headingText(item)).toBe(school)
      expect(textContent(item)).toContain(period)
      expect(textContent(item)).toContain(degree)
    })
  })

  it('lists every experience entry as a row headed by the role, keeping all highlights', async () => {
    const html = section(
      await renderComponent(ResumeSection, { locale }),
      'about-experience'
    )
    const items = entries(html, 'experience-list')

    expect(items).toHaveLength(experience.length)
    items.forEach((item, index) => {
      const entry = copy.experience.items[experience[index].id]
      expect(headingText(item)).toBe(entry.role)
      expect(textContent(item)).toContain(entry.period)
      expect(textContent(item)).toContain(entry.organization)
      for (const line of entry.highlights ?? []) {
        expect(textContent(item)).toContain(line)
      }
    })
  })

  it('stacks education and experience as full-width sections instead of two columns', async () => {
    const html = await renderComponent(ResumeSection, { locale })

    expect(html).not.toMatch(/is-8-wide/)
    expect(section(html, 'about-education')).not.toContain('experience-list')
  })

  it('shows skills in one tinted panel', async () => {
    const html = section(
      await renderComponent(ResumeSection, { locale }),
      'about-skills'
    )

    expect(html.match(/ts-content is-tertiary/g)).toHaveLength(1)
  })
})
