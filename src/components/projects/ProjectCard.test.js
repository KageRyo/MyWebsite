import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import { featuredProjects } from '../../config/featuredProjects'
import { renderComponent } from '../../test-utils/renderComponent'
import ProjectCard from './ProjectCard.vue'

const renderCard = id =>
  renderComponent({
    render: () =>
      h(ProjectCard, {
        project: featuredProjects.find(project => project.id === id)
      })
  })

describe('ProjectCard', () => {
  it('links the KServe card to its project detail page', async () => {
    const html = await renderCard('kserve')
    expect(html).toMatch(
      /<a[^>]*href="\/projects\/kserve"[^>]*>[\s\S]*?查看專案介紹/
    )
  })

  it('shows no detail link for projects without one', async () => {
    expect(await renderCard('tagTwin')).not.toContain('查看專案介紹')
  })
})
