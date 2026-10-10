import { describe, expect, it } from 'vitest'
import { useProjectStore } from '../stores/projects'
import { renderComponent } from '../test-utils/renderComponent'
import DrawerContent from './home/DrawerContent.vue'
import FeaturedPhotos from './home/FeaturedPhotos.vue'
import MobileDrawer from './layout/MobileDrawer.vue'
import GitHubProjects from './projects/GitHubProjects.vue'

// 這些 class 名稱必須是 TocasUI 實際提供的，拼錯時樣式會靜默失效
const classLists = html =>
  [...html.matchAll(/class="([^"]*)"/g)].map(([, value]) => value.split(/\s+/))

describe('TocasUI class names', () => {
  it('show the loading indicator while the GitHub archive loads', async () => {
    const html = await renderComponent(GitHubProjects, {
      prepare: () => {
        useProjectStore().loadingByAccount.kageryo = true
      }
    })

    expect(classLists(html)).toContainEqual(['ts-loading'])
  })

  it.each([
    ['See More drawer', DrawerContent],
    ['mobile navigation drawer', MobileDrawer]
  ])('style the %s close button as outlined', async (_name, component) => {
    const html = await renderComponent(component)
    const buttons = classLists(html).filter(list => list.includes('ts-button'))

    expect(buttons).toContainEqual(
      expect.arrayContaining(['is-rounded', 'is-outlined', 'is-small'])
    )
  })

  it.each([
    ['See More drawer', DrawerContent],
    ['mobile navigation drawer', MobileDrawer]
  ])('open the %s from the end side', async (_name, component) => {
    const drawer = classLists(await renderComponent(component)).find(list =>
      list.includes('ts-app-drawer')
    )

    expect(drawer).toContain('is-end')
  })

  it.each([
    ['ts-loader', GitHubProjects],
    ['is-padd', FeaturedPhotos],
    ['is-outline', DrawerContent],
    ['is-right', MobileDrawer]
  ])('no longer use the nonexistent %s class', async (name, component) => {
    const html = await renderComponent(component, {
      prepare: () => {
        useProjectStore().loadingByAccount.kageryo = true
      }
    })

    expect(classLists(html).flat()).not.toContain(name)
  })
})
