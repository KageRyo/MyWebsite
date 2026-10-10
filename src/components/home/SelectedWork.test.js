import { describe, expect, it } from 'vitest'
import en from '../../locales/en'
import ja from '../../locales/ja'
import zhTW from '../../locales/zh-TW'
import { selectedWorkIds } from '../../config/featuredProjects'
import { renderComponent, textContent } from '../../test-utils/renderComponent'
import SelectedWork from './SelectedWork.vue'

const items = html =>
  html
    .match(/<ol class="selected-work-list"[^>]*>(.*)<\/ol>/s)[1]
    .split(/<li class="selected-work-item"[^>]*>/)
    .slice(1)

describe.each([
  ['zh-TW', zhTW],
  ['en', en],
  ['ja', ja]
])('SelectedWork in %s', (locale, messages) => {
  const cards = messages.projects.featured.items

  it('lists the selected projects in order with their title, role and a short summary', async () => {
    const html = await renderComponent(SelectedWork, { locale })
    const entries = items(html)

    expect(entries).toHaveLength(selectedWorkIds.length)
    entries.forEach((entry, index) => {
      const id = selectedWorkIds[index]
      expect(textContent(entry.match(/<h3[^>]*>(.*?)<\/h3>/s)[1])).toBe(
        cards[id].title
      )
      expect(textContent(entry)).toContain(cards[id].role)
      expect(textContent(entry)).toContain(messages.home.selectedWork.items[id])
    })
  })

  it('links KServe to its project page and the others to their card on Projects', async () => {
    const entries = items(await renderComponent(SelectedWork, { locale }))
    const links = entries.map(entry => entry.match(/href="([^"]+)"/)[1])

    expect(links).toEqual(
      selectedWorkIds.map(id =>
        id === 'kserve' ? '/projects/kserve' : `/projects#project-${id}`
      )
    )
  })

  it('marks projects whose source code is private', async () => {
    const entries = items(await renderComponent(SelectedWork, { locale }))

    for (const [index, id] of selectedWorkIds.entries()) {
      expect(
        textContent(entries[index]).includes(
          messages.projects.featured.privateSource
        )
      ).toBe(id !== 'kserve')
    }
  })

  it('links to every project', async () => {
    const html = await renderComponent(SelectedWork, { locale })
    const after = html.slice(html.indexOf('</ol>'))

    expect(after).toMatch(/<a[^>]*href="\/projects"/)
  })
})

describe('SelectedWork evidence', () => {
  it('counts the KServe pull requests from the project data', async () => {
    const [kserve] = items(
      await renderComponent(SelectedWork, { locale: 'en' })
    )

    expect(textContent(kserve)).toContain('2 pull requests, 1 merged')
  })
})
