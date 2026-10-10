import { describe, expect, it } from 'vitest'
import en from '../locales/en'
import ja from '../locales/ja'
import zhTW from '../locales/zh-TW'
import { projectDetails, projectDetailsBySlug } from './projectDetails'
import { featuredProjects } from './featuredProjects'

describe('project detail pages', () => {
  it('include the KServe contributions', () => {
    expect(projectDetailsBySlug.kserve).toBeDefined()
  })

  it('reuse the featured project pull request links so statuses stay in sync', () => {
    const kserve = featuredProjects.find(({ id }) => id === 'kserve')
    expect(
      projectDetailsBySlug.kserve.contributions.map(({ pr }) => pr)
    ).toEqual(kserve.links)
  })

  it.each(Object.entries({ 'zh-TW': zhTW, en, ja }))(
    'have page metadata in %s',
    (_locale, messages) => {
      for (const { metaKey } of projectDetails) {
        expect(messages.meta[metaKey]).toMatchObject({
          title: expect.any(String),
          description: expect.any(String)
        })
      }
    }
  )

  it('are linked from an existing featured project', () => {
    for (const { slug } of projectDetails) {
      expect(featuredProjects.some(({ detail }) => detail === slug)).toBe(true)
    }
    for (const { detail } of featuredProjects.filter(({ detail }) => detail)) {
      expect(projectDetailsBySlug[detail]).toBeDefined()
    }
  })
})
