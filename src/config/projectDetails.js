import { featuredProjects } from './featuredProjects'

const kserve = featuredProjects.find(({ id }) => id === 'kserve')
const kservePullRequest = number =>
  kserve.links.find(({ url }) => url.endsWith(`/pull/${number}`))

// 專案介紹頁的結構與連結；文字放在 locales 的 projectDetail.*，
// PR 連結沿用作品集卡片的資料，讓合併狀態只需維護一處
export const projectDetails = [
  {
    slug: 'kserve',
    projectId: 'kserve',
    metaKey: 'kserveProject',
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

export const projectDetailsBySlug = Object.fromEntries(
  projectDetails.map(detail => [detail.slug, detail])
)
