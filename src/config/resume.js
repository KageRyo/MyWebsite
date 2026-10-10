// 履歷資料：時間、學校與職稱等文字放在 locales 的 about.resume.*，這裡只記錄順序與連結
export const resumePdfUrl = '/resume/Chien-Hsun_Chang_Resume.pdf'

export const education = [{ id: 'ccu' }, { id: 'nutc' }]

export const experience = [
  { id: 'ccuResearch' },
  { id: 'ccuSysadmin' },
  {
    id: 'paia',
    link: {
      url: 'https://app.paia-arena.com/',
      labelKey: 'about.resume.experience.items.paia.platform'
    }
  },
  { id: 'codingApe' }
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
