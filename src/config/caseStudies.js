import { featuredProjects } from './featuredProjects'

const kserve = featuredProjects.find(({ id }) => id === 'kserve')
const kservePullRequest = number =>
  kserve.links.find(({ url }) => url.endsWith(`/pull/${number}`))

// 案例研究的結構與連結；文字放在 locales 的 caseStudies.*，
// PR 連結沿用作品集卡片的資料，讓合併狀態只需維護一處
export const caseStudies = [
  {
    slug: 'kserve',
    projectId: 'kserve',
    metaKey: 'kserveCaseStudy',
    contributions: [
      {
        id: 'logging',
        pr: kservePullRequest(4687),
        issue: {
          label: 'kserve/kserve#3919',
          url: 'https://github.com/kserve/kserve/issues/3919'
        }
      },
      {
        id: 'runtimeClassName',
        pr: kservePullRequest(5198),
        issue: {
          label: 'kserve/kserve#5057',
          url: 'https://github.com/kserve/kserve/issues/5057'
        }
      }
    ]
  }
]

export const caseStudiesBySlug = Object.fromEntries(
  caseStudies.map(caseStudy => [caseStudy.slug, caseStudy])
)
