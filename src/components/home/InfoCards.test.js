import { describe, expect, it } from 'vitest'
import en from '../../locales/en'
import ja from '../../locales/ja'
import zhTW from '../../locales/zh-TW'
import { featuredProjects, homeCards } from '../../config/featuredProjects'
import { renderComponent, textContent } from '../../test-utils/renderComponent'
import InfoCards from './InfoCards.vue'

const slides = html =>
  html
    .match(/<ul id="home-card-track" class="card-track"[^>]*>(.*)<\/ul>/s)[1]
    .split(/<li class="card-slide"[^>]*>/)
    .slice(1)

// 反覆移除註解與標籤直到不再變化，避免移除後又拼出新的標籤
const stripTags = html => {
  let text = html
  let previous
  do {
    previous = text
    text = text.replace(/<!--.*?-->|<[^>]+>/gs, '')
  } while (text !== previous)
  return text
}

const title = slide =>
  textContent(
    slide.match(
      /<div class="ts-header is-heavy has-flex-center"[^>]*>(.*?)<\/div>/s
    )[1]
  )

const iconLinks = slide =>
  [
    ...slide.matchAll(
      /<a\b[^>]*class="[^"]*\bts-icon\b[^"]*\bis-circular\b[^"]*"[^>]*>/g
    )
  ].map(([tag]) => ({
    href: tag.match(/href="([^"]*)"/)?.[1],
    label: tag.match(/aria-label="([^"]*)"/)?.[1]
  }))

describe('KageRyo Developer card in English', () => {
  it('separates its sentences with a space', async () => {
    const [kageryo] = slides(await renderComponent(InfoCards, { locale: 'en' }))
    // 移除標籤時不補空白，才看得到瀏覽器實際顯示的文字
    const paragraph = stripTags(
      kageryo.match(/<p class="card-text"[^>]*>(.*?)<\/p>/s)[1]
    )

    expect(paragraph).not.toMatch(/[.!?][A-Z]/)
  })
})

describe.each([
  ['zh-TW', zhTW],
  ['en', en],
  ['ja', ja]
])('home cards in %s', (locale, messages) => {
  const projects = messages.projects.featured.items

  it('start with the KageRyo Developer card, then the projects', async () => {
    const titles = slides(await renderComponent(InfoCards, { locale })).map(
      title
    )

    expect(titles).toEqual([
      'KageRyo Developer',
      ...homeCards.map(card =>
        card.titleKey
          ? card.titleKey
              .split('.')
              .reduce((value, key) => value[key], messages)
          : projects[card.id].title
      )
    ])
  })

  it('look like the original home cards: picture on top, centered title, a paragraph and icon links', async () => {
    for (const slide of slides(await renderComponent(InfoCards, { locale }))) {
      const picture = slide.search(/class="(ts-image|project-cover)[ "]/)
      const heading = slide.indexOf('ts-header is-heavy has-flex-center')
      const paragraph = slide.search(/<p class="card-text"/)
      const icons = slide.search(/class="[^"]*\bts-icon\b[^"]*\bis-circular\b/)

      expect(slide).toMatch(/^\s*<div class="ts-box/)
      expect([picture, heading, paragraph, icons].every(at => at >= 0)).toBe(
        true
      )
      expect([picture, heading, paragraph, icons]).toEqual(
        [picture, heading, paragraph, icons].toSorted((a, b) => a - b)
      )
    }
  })

  it('summarize each project in a paragraph', async () => {
    const [, ...projectSlides] = slides(
      await renderComponent(InfoCards, { locale })
    )

    projectSlides.forEach((slide, index) => {
      expect(textContent(slide)).toContain(
        messages.home.infoCards.projects[homeCards[index].id]
      )
    })
  })

  it("show each project's picture with its size, alt text and lazy loading", async () => {
    const [kageryo, ...projectSlides] = slides(
      await renderComponent(InfoCards, { locale })
    )

    expect(kageryo).toContain('chienhsun.webp')
    projectSlides.forEach((slide, index) => {
      const { id } = homeCards[index]
      const { image } = featuredProjects.find(project => project.id === id)
      const tag = slide.match(/<img\b[^>]*>/)[0]
      expect(tag).toContain(`src="${image.src}"`)
      expect(tag).toContain(`width="${image.width}"`)
      expect(tag).toContain(`height="${image.height}"`)
      expect(tag).toContain(`alt="${projects[id].imageAlt}"`)
      expect(tag).toContain('loading="lazy"')
    })
  })

  it('link each project to its pull requests, project page or Projects card, repositories and coverage', async () => {
    const [, ...projectSlides] = slides(
      await renderComponent(InfoCards, { locale })
    )

    homeCards.forEach((card, index) => {
      const project = featuredProjects.find(({ id }) => id === card.id)
      const expected = [
        ...project.links.map(({ url }) => url),
        project.detail
          ? `/projects/${project.detail}`
          : `/projects#project-${card.id}`,
        ...(project.repositories ?? []).map(({ url }) => url),
        ...(project.related ?? []).map(({ url }) => url)
      ]
      expect(iconLinks(projectSlides[index]).map(({ href }) => href)).toEqual(
        expected
      )
    })
  })

  it('label every icon link', async () => {
    for (const slide of slides(await renderComponent(InfoCards, { locale }))) {
      for (const { label } of iconLinks(slide)) {
        expect(label).toEqual(expect.stringMatching(/\S/))
      }
    }
  })

  it('offer previous and next buttons that control the card row', async () => {
    const html = await renderComponent(InfoCards, { locale })
    const buttons = [...html.matchAll(/<button\b[^>]*>/g)].map(([tag]) => tag)

    expect(buttons).toHaveLength(2)
    expect(buttons[0]).toContain(
      `aria-label="${messages.home.infoCards.previous}"`
    )
    expect(buttons[1]).toContain(`aria-label="${messages.home.infoCards.next}"`)
    for (const button of buttons) {
      expect(button).toContain('aria-controls="home-card-track"')
    }
  })

  it('name the card row for screen readers without a visible title', async () => {
    const html = await renderComponent(InfoCards, { locale })

    expect(html).toMatch(/<section[^>]*aria-labelledby="home-cards-title"/)
    expect(html).toMatch(
      /<h2 id="home-cards-title" class="visually-hidden"[^>]*>/
    )
  })
})
