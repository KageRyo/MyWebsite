import { describe, expect, it } from 'vitest'
import en from '../locales/en'
import ja from '../locales/ja'
import zhTW from '../locales/zh-TW'
import { caseStudies, caseStudiesBySlug } from './caseStudies'
import { featuredProjects } from './featuredProjects'

describe('case studies', () => {
  it('include the KServe contributions', () => {
    expect(caseStudiesBySlug.kserve).toBeDefined()
  })

  it('reuse the featured project pull request links so statuses stay in sync', () => {
    const kserve = featuredProjects.find(({ id }) => id === 'kserve')
    expect(caseStudiesBySlug.kserve.contributions.map(({ pr }) => pr)).toEqual(
      kserve.links
    )
  })

  it.each(Object.entries({ 'zh-TW': zhTW, en, ja }))(
    'have page metadata in %s',
    (_locale, messages) => {
      for (const { metaKey } of caseStudies) {
        expect(messages.meta[metaKey]).toMatchObject({
          title: expect.any(String),
          description: expect.any(String)
        })
      }
    }
  )

  it('are linked from an existing featured project', () => {
    for (const { slug } of caseStudies) {
      expect(featuredProjects.some(({ caseStudy }) => caseStudy === slug)).toBe(
        true
      )
    }
    for (const { caseStudy } of featuredProjects.filter(
      ({ caseStudy }) => caseStudy
    )) {
      expect(caseStudiesBySlug[caseStudy]).toBeDefined()
    }
  })
})
