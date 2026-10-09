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

// 正式名稱以中文 CV 為準
describe('official project names', () => {
  it('title zh-TW cards and the tools section with the official names', () => {
    const { featured, tools } = zhTW.projects

    expect(featured.items.tagTwin.title).toBe(
      '智慧防災數位孿生系統（TAG-Twin）'
    )
    expect(featured.items.federatedAqi.title).toBe(
      '跨國聯邦式空氣品質分析與部署平台'
    )
    expect(featured.items.environmentalEnforcement.title).toBe(
      'AI 環保科技執法影像分析系統'
    )
    expect(tools.header).toBe('開源資料工程與治理工具組')
  })

  it('refers to the AQI platform by its official name in the summary', () => {
    expect(zhTW.projects.featured.items.federatedAqi.summary).toContain(
      '跨國聯邦式空氣品質分析與部署平台'
    )
  })

  it('aligns the Japanese titles with the official names', () => {
    const { items } = ja.projects.featured

    expect(items.tagTwin.title).toBe(
      'スマート防災デジタルツインシステム（TAG-Twin）'
    )
    expect(items.federatedAqi.title).toBe(
      '国際連携・連合学習による空気質分析・デプロイ基盤'
    )
    // 「環境法執行」は不自然、「国際連合」は国連と誤読される
    expect(items.environmentalEnforcement.title).toBe(
      'AI 環境違反取締り映像解析システム'
    )
    expect(ja.projects.tools.header).toBe(
      'オープンソースのデータエンジニアリング・ガバナンスツール群'
    )
  })

  it('names the English tools section after the official toolkit', () => {
    expect(en.projects.tools.header).toBe(
      'Open-Source Data Engineering & Governance Tools'
    )
  })
})
