// 履歷資料以中文 CV 為準：時間、學校、職稱與工作內容等文字放在 locales 的 about.resume.*，
// 這裡只記錄順序、組織連結與技能清單
export const resumePdfUrl = '/resume/Chien-Hsun_Chang_Resume.pdf'

export const education = [{ id: 'ccu' }, { id: 'nutc' }]

const embeddedLab = {
  url: 'https://embedded.cs.ccu.edu.tw/',
  labelKey: 'about.resume.links.embeddedLab'
}

export const experience = [
  {
    id: 'ccuResearch',
    links: [
      embeddedLab,
      {
        url: 'https://ai4sdc.ccu.edu.tw/',
        labelKey: 'about.resume.links.ai4sdc'
      }
    ]
  },
  { id: 'ccuSysadmin', links: [embeddedLab] },
  {
    id: 'paia',
    links: [
      { url: 'https://www.paia-tech.com/', labelKey: 'about.resume.links.paia' },
      { url: 'https://app.paia-arena.com/', labelKey: 'about.resume.links.arena' }
    ]
  },
  {
    id: 'codingApe',
    links: [
      {
        url: 'https://codingapeschool.com/',
        labelKey: 'about.resume.links.codingApe'
      }
    ]
  }
]

export const skillGroups = [
  { id: 'languages', items: ['Python', 'Go', 'Rust', 'C/C++', 'SQL'] },
  {
    id: 'backend',
    items: [
      'FastAPI',
      'Django Ninja',
      'Pydantic',
      'REST API',
      'WebSocket',
      'PostgreSQL/PostGIS',
      'MongoDB',
      'Redis'
    ]
  },
  {
    id: 'aiml',
    items: [
      'PyTorch',
      'scikit-learn',
      'XGBoost',
      'LightGBM',
      'Computer Vision',
      'Object Detection',
      'Tracking',
      'Pose Estimation',
      'OCR',
      'VLM',
      'Federated Learning'
    ]
  },
  {
    id: 'platform',
    items: [
      'Docker',
      'Kubernetes',
      'Helm',
      'KServe',
      'Kubeflow',
      'GitHub Actions',
      'CI/CD',
      'Grafana',
      'Prometheus'
    ]
  },
  {
    id: 'linux',
    items: [
      'Linux',
      'Docker Compose',
      'SSH',
      'Networking',
      'GPU Workstation',
      'Storage',
      'WSL2'
    ]
  },
  {
    id: 'projectManagement',
    items: ['Git / GitHub', 'GitLab', 'Code Review', 'Agile / Scrum']
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
