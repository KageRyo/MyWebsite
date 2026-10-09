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
  it('links the KServe card to its case study', async () => {
    const html = await renderCard('kserve')
    expect(html).toMatch(
      /<a[^>]*href="\/case-studies\/kserve"[^>]*>[\s\S]*?閱讀案例研究/
    )
  })

  it('shows no case study link for projects without one', async () => {
    expect(await renderCard('tagTwin')).not.toContain('/case-studies/')
  })
})
