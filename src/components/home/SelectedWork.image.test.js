import { describe, expect, it, vi } from 'vitest'
import { renderComponent } from '../../test-utils/renderComponent'
import SelectedWork from './SelectedWork.vue'

const cards = html =>
  html
    .match(/<ul class="project-cards"[^>]*>(.*)<\/ul>/s)[1]
    .split(/<li class="project-card-item"[^>]*>/)
    .slice(1)

// 模擬日後提供 TAG-Twin 截圖的情況；說明文字借用既有的翻譯鍵
vi.mock('../../config/featuredProjects', async importOriginal => {
  const actual = await importOriginal()
  return {
    ...actual,
    selectedWork: actual.selectedWork.map(item =>
      item.id === 'tagTwin'
        ? {
            ...item,
            image: {
              src: '/assets/img/tag-twin.webp',
              width: 1600,
              height: 900,
              altKey: 'projects.featured.items.tagTwin.title'
            }
          }
        : item
    )
  }
})

describe('SelectedWork with a project image', () => {
  it('shows the image in place of the cover, sized and lazy-loaded', async () => {
    const [kserve, tagTwin] = cards(await renderComponent(SelectedWork))

    expect(tagTwin).toMatch(
      /<img[^>]*src="\/assets\/img\/tag-twin\.webp"[^>]*width="1600"[^>]*height="900"[^>]*alt="智慧防災數位孿生系統（TAG-Twin）"[^>]*loading="lazy"/
    )
    expect(tagTwin).not.toContain('project-cover')
    expect(kserve).toContain('project-cover')
  })
})
