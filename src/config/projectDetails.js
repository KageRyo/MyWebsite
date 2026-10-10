import { featuredProjects } from './featuredProjects'

const kserve = featuredProjects.find(({ id }) => id === 'kserve')
const kservePullRequest = number =>
  kserve.links.find(({ url }) => url.endsWith(`/pull/${number}`))

// 專案介紹頁的結構與連結；文字放在 locales 的 projectDetail.*，
// PR 連結沿用作品集卡片的資料，讓合併狀態只需維護一處。
// flow 是架構圖每一步的程式名稱，說明文字在 projectDetail.<slug>.diagram.steps；
// 以陣列表示的步驟是分支（例如判斷結果為「是」或「否」時各自執行的程式）。
// 選填的 media（圖片）與 coverage（報導）只放已確認來源與授權的公開素材，沒有就省略
export const projectDetails = [
  {
    slug: 'kserve',
    projectId: 'kserve',
    metaKey: 'kserveProject',
    contributions: [
      {
        id: 'logging',
        // 最後一步依 logger.hasHandlers() 的結果分成兩條路
        flow: [
          'configure_logging()',
          'logger.hasHandlers()',
          [
            { when: 'yes', code: 'return' },
            { when: 'no', code: 'dictConfig()' }
          ]
        ],
        pr: kservePullRequest(4687),
        issue: {
          label: 'kserve/kserve#3919',
          url: 'https://github.com/kserve/kserve/issues/3919'
        }
      },
      {
        id: 'runtimeClassName',
        flow: ['spec.runtimeClassName', 'MergePodSpec()', 'PodSpec'],
        pr: kservePullRequest(5198),
        issue: {
          label: 'kserve/kserve#5057',
          url: 'https://github.com/kserve/kserve/issues/5057'
        }
      }
    ]
  }
]

// 用 Map 查詢，避免 constructor、__proto__ 等繼承屬性被當成專案
const projectDetailsBySlug = new Map(
  projectDetails.map(detail => [detail.slug, detail])
)

export const getProjectDetail = slug => projectDetailsBySlug.get(slug)
