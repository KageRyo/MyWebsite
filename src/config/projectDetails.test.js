import { describe, expect, it } from 'vitest'
import en from '../locales/en'
import ja from '../locales/ja'
import zhTW from '../locales/zh-TW'
import { getProjectDetail, projectDetails } from './projectDetails'
import { featuredProjects } from './featuredProjects'

describe('project detail pages', () => {
  it('include the KServe contributions', () => {
    expect(getProjectDetail('kserve')).toBeDefined()
  })

  it('reuse the featured project pull request links so statuses stay in sync', () => {
    const kserve = featuredProjects.find(({ id }) => id === 'kserve')
    expect(
      getProjectDetail('kserve').contributions.map(({ pr }) => pr)
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

  it.each(Object.entries({ 'zh-TW': zhTW, en, ja }))(
    'describe every diagram step in %s',
    (_locale, messages) => {
      for (const { slug, contributions } of projectDetails) {
        for (const { id, flow = [] } of contributions) {
          const texts = messages.projectDetail[slug].diagram.steps[id]
          expect(texts).toHaveLength(flow.length)
          flow.forEach((step, index) => {
            if (!Array.isArray(step)) {
              expect(texts[index]).toEqual(expect.any(String))
              return
            }
            // 分支步驟：每條分支都要有說明與「是／否」標籤
            expect(texts[index]).toHaveLength(step.length)
            for (const { when } of step) {
              expect(messages.projectDetail.branch[when]).toEqual(
                expect.any(String)
              )
            }
          })
        }
      }
    }
  )

  it('are linked from an existing featured project', () => {
    for (const { slug } of projectDetails) {
      expect(featuredProjects.some(({ detail }) => detail === slug)).toBe(true)
    }
    for (const { detail } of featuredProjects.filter(({ detail }) => detail)) {
      expect(getProjectDetail(detail)).toBeDefined()
    }
  })

  it.each(['constructor', 'toString', '__proto__', 'hasOwnProperty'])(
    'do not treat the inherited %s property as a project',
    slug => {
      expect(getProjectDetail(slug)).toBeUndefined()
    }
  )
})
