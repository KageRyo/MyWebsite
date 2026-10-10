import { describe, expect, it, vi } from 'vitest'
import { renderComponent } from '../../test-utils/renderComponent'
import InfoCards from './InfoCards.vue'

// 模擬某個專案還沒有可公開圖片的情況
vi.mock('../../config/featuredProjects', async importOriginal => {
  const actual = await importOriginal()
  return {
    ...actual,
    homeCards: actual.homeCards.map(({ image: _image, ...card }) =>
      card.id === 'tagTwin' ? card : { ...card, image: _image }
    )
  }
})

const slides = html =>
  html
    .match(/<ul id="home-card-track" class="card-track"[^>]*>(.*)<\/ul>/s)[1]
    .split(/<li class="card-slide"[^>]*>/)
    .slice(1)

describe('home cards without a project image', () => {
  it('show the KageRyo cover instead of an empty picture', async () => {
    const [, kserve, tagTwin] = slides(await renderComponent(InfoCards))

    expect(tagTwin).toMatch(/<div class="project-cover"[^>]*aria-hidden="true"/)
    expect(tagTwin).not.toContain('<img')
    expect(kserve).toContain('<img')
  })
})
