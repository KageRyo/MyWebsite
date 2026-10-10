import { describe, expect, it } from 'vitest'
import en from '../../locales/en'
import ja from '../../locales/ja'
import zhTW from '../../locales/zh-TW'
import { selectedWork } from '../../config/featuredProjects'
import { renderComponent, textContent } from '../../test-utils/renderComponent'
import SelectedWork from './SelectedWork.vue'

const cards = html =>
  html
    .match(/<ul class="project-cards"[^>]*>(.*)<\/ul>/s)[1]
    .split(/<li class="project-card-item"[^>]*>/)
    .slice(1)

describe.each([
  ['zh-TW', zhTW],
  ['en', en],
  ['ja', ja]
])('SelectedWork in %s', (locale, messages) => {
  const projects = messages.projects.featured.items

  it('shows each selected project as a card with its title, role and a short summary', async () => {
    const entries = cards(await renderComponent(SelectedWork, { locale }))

    expect(entries).toHaveLength(selectedWork.length)
    entries.forEach((entry, index) => {
      const { id } = selectedWork[index]
      expect(entry).toMatch(/<article class="ts-box project-card"/)
      expect(textContent(entry.match(/<h3[^>]*>(.*?)<\/h3>/s)[1])).toBe(
        projects[id].title
      )
      expect(textContent(entry)).toContain(projects[id].role)
      expect(textContent(entry)).toContain(messages.home.selectedWork.items[id])
    })
  })

  it('shows the KageRyo cover until a public image is provided', async () => {
    for (const entry of cards(
      await renderComponent(SelectedWork, { locale })
    )) {
      expect(entry).toMatch(/<div class="project-cover"[^>]*aria-hidden="true"/)
      expect(entry).not.toContain('<img')
    }
  })

  it('links each card title to its project page or its card on Projects', async () => {
    const entries = cards(await renderComponent(SelectedWork, { locale }))
    const links = entries.map(
      entry => entry.match(/<h3[^>]*>\s*<a[^>]*href="([^"]+)"/)[1]
    )

    expect(links).toEqual(
      selectedWork.map(({ id }) =>
        id === 'kserve' ? '/projects/kserve' : `/projects#project-${id}`
      )
    )
  })

  it('marks projects whose source code is private', async () => {
    const entries = cards(await renderComponent(SelectedWork, { locale }))

    selectedWork.forEach(({ id }, index) => {
      expect(
        textContent(entries[index]).includes(
          messages.projects.featured.privateSource
        )
      ).toBe(id !== 'kserve')
    })
  })

  it('names the section for screen readers without showing a title', async () => {
    const html = await renderComponent(SelectedWork, { locale })

    expect(html).toMatch(/<section[^>]*aria-labelledby="home-selected-work"/)
    expect(html).toMatch(
      /<h2 id="home-selected-work" class="visually-hidden"[^>]*>/
    )
  })

  it('links to every project', async () => {
    const html = await renderComponent(SelectedWork, { locale })

    expect(html.slice(html.indexOf('</ul>'))).toMatch(
      /<a[^>]*href="\/projects"/
    )
  })
})

describe('SelectedWork evidence', () => {
  it('counts the KServe pull requests from the project data', async () => {
    const [kserve] = cards(
      await renderComponent(SelectedWork, { locale: 'en' })
    )

    expect(textContent(kserve)).toContain('2 pull requests, 1 merged')
  })
})
