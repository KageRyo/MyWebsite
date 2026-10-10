// 精選專案依最新履歷排序；標題、角色、期間與摘要放在 locales 的 projects.featured.items.*
// 未公開原始碼的專案不提供連結，避免指向私人儲存庫。
// related 是公開的報導、計畫或專案頁面（來源與標題依原文），依 CV 收錄
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
    ],
    related: [
      {
        kind: 'page',
        source: 'CNCF',
        title: 'KServe',
        url: 'https://www.cncf.io/projects/kserve/',
        lang: 'en'
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
    links: [],
    related: [
      {
        kind: 'news',
        source: '中央社 CNA',
        title: '中正大學開發「虛擬民雄」　智慧防災強化決策效率',
        url: 'https://www.cna.com.tw/news/ahel/202609020220.aspx',
        lang: 'zh-Hant'
      },
      {
        kind: 'news',
        source: '國立中正大學',
        title: '中正大學導入智慧防災科技　打造安全防護新力量',
        url: 'https://www.ccu.edu.tw/p/406-1000-94305,r981.php',
        lang: 'zh-Hant'
      },
      {
        kind: 'page',
        source: '國立中正大學 USR',
        title: '以AI強化地方韌性：全球極端氣候災害下的智慧治理與大學社會責任',
        url: 'https://usr.ccu.edu.tw/p/404-1165-88217.php',
        lang: 'zh-Hant'
      }
    ]
  },
  {
    id: 'federatedAqi',
    stack: ['PyTorch', 'Flower', 'Kubernetes', 'Kubeflow', 'KServe', 'Grafana'],
    links: [],
    related: [
      {
        kind: 'news',
        source: '經濟日報',
        title: '臺灣AI前瞻技術落地印尼 中正大學攜手慈育大學成立聯合研究中心',
        url: 'https://money.udn.com/money/story/5723/9744094',
        lang: 'zh-Hant'
      },
      {
        kind: 'news',
        source: '國立中正大學',
        title:
          '臺灣AI前瞻技術落地印尼　中正大學攜手慈育大學拓展國際科技合作新格局',
        url: 'https://www.ccu.edu.tw/p/406-1000-94652,r981.php?Lang=zh-tw',
        lang: 'zh-Hant'
      }
    ]
  },
  {
    id: 'environmentalEnforcement',
    stack: ['Python', 'PyTorch', 'Computer Vision', 'CUDA/TensorRT', 'Docker'],
    links: [],
    related: [
      {
        kind: 'news',
        source: '自由時報',
        title: '嘉義縣科技執法升級 亂丟垃圾最高可罰10萬元',
        url: 'https://news.ltn.com.tw/news/life/breakingnews/5554988',
        lang: 'zh-Hant'
      }
    ]
  }
]

// 首頁最下方可左右滑動的卡片，排在 KageRyo Developer 之後。
// image 是已確認可公開的截圖或照片（替代文字在 home.infoCards.images）；
// 沒有圖片時改顯示 KageRyo 封面，icon 用在封面上。
// 不在作品集裡的專案自己提供 titleKey 與 links
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
    titleKey: 'home.infoCards.titles.waterMirror',
    icon: 'is-droplet-icon',
    image: { src: '/assets/img/watermirror.webp', width: 800, height: 450 },
    links: [
      {
        icon: 'is-github-icon',
        label: 'WaterMirror GitHub (opens in a new tab)',
        url: 'https://github.com/KageRyo/WaterMirror'
      },
      {
        icon: 'is-server-icon',
        label: 'WQSurrogateModels GitHub (opens in a new tab)',
        url: 'https://github.com/KageRyo/WQSurrogateModels'
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
