// 精選專案依最新履歷排序；標題、角色、期間與摘要放在 locales 的 projects.featured.items.*
// 未公開原始碼的專案不提供連結，避免指向私人儲存庫
export const featuredProjects = [
  {
    id: 'kserve',
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
