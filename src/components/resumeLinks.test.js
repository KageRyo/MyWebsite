import { describe, expect, it } from 'vitest'
import { resumePdfUrl } from '../config/resume'
import { renderComponent } from '../test-utils/renderComponent'
import PersonalInfo from './about/PersonalInfo.vue'
import HeroSection from './home/HeroSection.vue'

const downloadLinks = html =>
  [...html.matchAll(/<a [^>]*href="([^"]+\.pdf)"[^>]*\bdownload\b/g)].map(
    ([, href]) => href
  )

describe('resume download links', () => {
  it.each([
    ['Home hero', HeroSection],
    ['About profile', PersonalInfo]
  ])('%s links to the shared public resume PDF', async (_name, component) => {
    expect(downloadLinks(await renderComponent(component))).toEqual([
      resumePdfUrl
    ])
  })
})
