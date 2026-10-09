// 履歷資料：時間與職稱等文字放在 locales 的 about.resume.*，這裡只記錄順序、圖示與連結
export const resumePdfUrl = '/resume/Chien-Hsun_Chang_Resume.pdf'

export const education = [
  { id: 'ccu', icon: 'is-graduation-cap-icon' },
  { id: 'nutc', icon: 'is-graduation-cap-icon' }
]

export const experience = [
  { id: 'ccuResearch', icon: 'is-diagram-project-icon' },
  { id: 'ccuSysadmin', icon: 'is-server-icon' },
  {
    id: 'paia',
    icon: 'is-code-icon',
    link: {
      url: 'https://app.paia-arena.com/',
      labelKey: 'about.resume.experience.items.paia.platform'
    }
  },
  { id: 'codingApe', icon: 'is-person-chalkboard-icon' }
]

export const skillGroups = [
  { id: 'languages', items: ['Python', 'Go', 'Rust', 'C/C++', 'SQL'] },
  {
    id: 'backend',
    items: [
      'FastAPI',
      'Django Ninja',
      'Pydantic',
      'PostgreSQL/PostGIS',
      'MongoDB',
      'Redis',
      'REST API',
      'WebSocket'
    ]
  },
  {
    id: 'aiml',
    items: [
      'PyTorch',
      'scikit-learn',
      'Computer Vision',
      'Federated Learning',
      'ML Inference'
    ]
  },
  {
    id: 'platform',
    items: [
      'Linux',
      'Docker',
      'Kubernetes',
      'KServe',
      'Kubeflow',
      'Helm',
      'GitHub Actions',
      'Git/GitLab',
      'Grafana',
      'Prometheus'
    ]
  },
  {
    id: 'digitalIc',
    items: [
      'Verilog',
      'RTL design',
      'Functional simulation',
      'APR',
      'DRC/LVS',
      'TSMC N16 AD FP design flow'
    ]
  }
]
