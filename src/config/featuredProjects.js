// 精選專案依最新履歷排序；標題、角色、期間與摘要放在 locales 的 projects.featured.items.*
// 未公開原始碼的專案不提供連結，避免指向私人儲存庫
export const featuredProjects = [
  {
    id: 'kserve',
    detail: 'kserve',
    stack: ['Python', 'Go', 'Kubernetes', 'CRD', 'Helm'],
    links: [
      {
        kind: 'pr',
        status: 'merged',
        label: 'kserve/kserve#4687',
        url: 'https://github.com/kserve/kserve/pull/4687'
      },
      {
        kind: 'pr',
        status: 'open',
        label: 'kserve/kserve#4919',
        url: 'https://github.com/kserve/kserve/pull/4919'
      },
      {
        kind: 'pr',
        status: 'open',
        label: 'kserve/kserve#5198',
        url: 'https://github.com/kserve/kserve/pull/5198'
      }
    ]
  },
  {
    id: 'tagTwin',
    stack: [
      'FastAPI',
      'PostgreSQL/PostGIS',
      'Redis',
      'Docker',
      'WebSocket',
      'GIS'
    ],
    links: []
  },
  {
    id: 'federatedAqi',
    stack: ['PyTorch', 'Flower', 'Kubernetes', 'Kubeflow', 'KServe', 'Grafana'],
    links: []
  },
  {
    id: 'environmentalEnforcement',
    stack: ['Python', 'PyTorch', 'Computer Vision', 'CUDA/TensorRT', 'Docker'],
    links: []
  }
]

// 首頁最下方可左右滑動的卡片，排在 KageRyo Developer 之後。
// image 是已確認可公開的截圖或照片（替代文字在 home.infoCards.images）；
// 沒有圖片時改顯示 KageRyo 封面，icon 用在封面上。
// 不在作品集裡的專案自己提供 title 與 links
export const homeCards = [
  {
    id: 'kserve',
    icon: 'is-cubes-icon',
    image: { src: '/assets/img/kserve-merge.webp', width: 800, height: 450 }
  },
  {
    id: 'tagTwin',
    icon: 'is-house-flood-water-icon',
    image: { src: '/assets/img/tag-twin.webp', width: 800, height: 450 }
  },
  {
    id: 'federatedAqi',
    icon: 'is-wind-icon',
    image: { src: '/assets/img/federated-aqi.webp', width: 800, height: 450 }
  },
  {
    id: 'environmentalEnforcement',
    icon: 'is-video-icon',
    image: {
      src: '/assets/img/environmental-enforcement.webp',
      width: 800,
      height: 450
    }
  },
  {
    id: 'waterMirror',
    title: 'WaterMirror 水之鏡',
    icon: 'is-droplet-icon',
    image: { src: '/assets/img/watermirror.webp', width: 800, height: 450 },
    links: [
      {
        icon: 'is-github-icon',
        label: 'WaterMirror GitHub (opens in a new tab)',
        url: 'https://github.com/KageRyo/WaterMirror'
      }
    ]
  }
]

// 從研究資料整理過程拆出的開源工具，GitHub 封存清單中也找得到
export const openSourceTools = [
  {
    id: 'releaseGuard',
    name: 'ReleaseGuard',
    language: 'Rust',
    url: 'https://github.com/KageRyo/ReleaseGuard'
  },
  {
    id: 'gridForge',
    name: 'GridForge',
    language: 'Python',
    url: 'https://github.com/KageRyo/GridForge',
    packageUrl: 'https://pypi.org/project/gridforge-spatial/'
  },
  {
    id: 'lineageGuard',
    name: 'LineageGuard',
    language: 'Rust',
    url: 'https://github.com/KageRyo/LineageGuard'
  },
  {
    id: 'evidenceMatrix',
    name: 'EvidenceMatrix',
    language: 'Python',
    url: 'https://github.com/KageRyo/EvidenceMatrix'
  },
  {
    id: 'entityLinkage',
    name: 'EntityLinkage',
    language: 'Python',
    url: 'https://github.com/KageRyo/EntityLinkage'
  }
]
