import { describe, expect, it } from 'vitest'
import en from '../locales/en'
import ja from '../locales/ja'
import zhTW from '../locales/zh-TW'
import { featuredProjects, openSourceTools } from './featuredProjects'

const locales = { 'zh-TW': zhTW, en, ja }

describe.each(Object.entries(locales))(
  'project content in %s',
  (_name, messages) => {
    const { featured, tools } = messages.projects

    it('translates every featured project', () => {
      for (const { id } of featuredProjects) {
        expect(featured.items[id]).toMatchObject({
          title: expect.any(String),
          category: expect.any(String),
          period: expect.any(String),
          summary: expect.any(String)
        })
      }
    })

    it('labels every link status used by featured projects', () => {
      const statuses = featuredProjects.flatMap(({ links }) =>
        links.map(({ status }) => status)
      )
      for (const status of statuses) {
        expect(featured.status[status]).toEqual(expect.any(String))
      }
    })

    it('describes every open-source tool', () => {
      for (const { id } of openSourceTools) {
        expect(tools.items[id]).toEqual(expect.any(String))
      }
    })
  }
)

describe('featured project links', () => {
  it('only link to public HTTPS destinations', () => {
    const urls = [
      ...featuredProjects.flatMap(({ links }) => links.map(({ url }) => url)),
      ...openSourceTools.flatMap(({ url, packageUrl }) =>
        [url, packageUrl].filter(Boolean)
      )
    ]
    for (const url of urls) {
      expect(new URL(url).protocol).toBe('https:')
    }
  })

  it('keeps the merged and open KServe pull requests distinct', () => {
    const kserve = featuredProjects.find(({ id }) => id === 'kserve')
    expect(
      kserve.links.map(({ url, status }) => [url.split('/').pop(), status])
    ).toEqual([
      ['4687', 'merged'],
      ['5198', 'open']
    ])
  })
})
