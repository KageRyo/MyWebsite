export default {
  meta: {
    home: {
      title: "張健勳 Chien-Hsun Chang {'|'} Backend / Platform Engineer · AI Systems / MLOps",
      description: '張健勳的個人網站與作品集。國立中正大學資工所碩士生，專注 Backend、Platform、AI Systems 與 MLOps；展示 KServe 開源貢獻、智慧防災數位孿生系統、AI 環保科技執法影像分析系統與跨國聯邦式空氣品質分析與部署平台。',
    },
    about: {
      title: 'KageRyo Developer - 關於我',
      description: '了解張健勳的學歷、後端與平台開發經歷、技能及開源貢獻。',
    },
    projects: {
      title: 'KageRyo Developer - 作品集',
      description: '精選 KServe 開源貢獻、智慧防災數位孿生系統（TAG-Twin）、AI 環保科技執法影像分析系統與跨國聯邦式空氣品質分析與部署平台等專案，並瀏覽 GitHub 開源作品。',
    },
    contact: {
      title: 'KageRyo Developer - 聯絡我',
      description: '透過電子郵件、GitHub 或 LinkedIn 聯絡張健勳，交流後端、AI 系統及開源相關話題。',
    },
    kserveProject: {
      title: 'KageRyo Developer - KServe (CNCF) 開源貢獻',
      description: '張健勳在 CNCF KServe 的開源貢獻：修正 Python SDK 覆蓋使用者日誌設定的問題，並為 ServingRuntime 加入 runtimeClassName 支援。',
    },
    notFound: { title: 'KageRyo Developer - 找不到頁面' },
  },
  nav: {
    home: '首頁',
    about: '關於我',
    projects: '作品集',
    contact: '聯絡我',
  },
  notFound: {
    message: '找不到你要前往的頁面。',
    backHome: '回到首頁',
  },
  home: {
    hero: {
      introduction: '嗨！我是健勳，目前就讀國立中正大學資訊工程研究所。平常喜歡開發小工具、參與開源，也投入 Backend／Platform、AI Systems 與 MLOps 相關的研究和系統整合。歡迎逛逛我的專案，一起交流！ヾ(*´∀ ˋ*)ﾉ',
      academic: '國立中正大學資工所碩士生｜預計 2027 年 8 月畢業',
      availability: '可配合 2027 預聘與研發替代役',
      viewProjects: '查看作品集',
      downloadResume: '英文履歷（PDF）',
      seeMore: '查看更多',
    },
    quote: {
      main: '人生和 Coding 一樣，都是從 print("Hello World"); 開始的。',
      cite: "人的出生是向世界問好，而 'Hello World' 賦予了我們新的篇章。",
    },
    featuredPhotos: {
      ministry: {
        header: '與教育部潘文忠部長合影',
        description: '參加 2023 國際發明展金牌得獎學生接見活動。',
      },
      coscup: {
        header: 'COSCUP',
        description: '於 COSCUP 2023 的 Lightning Talk 擔任講者。',
      },
    },
    infoCards: {
      intro: '是的沒錯，就是我本人，來自臺灣的開發者，目前就讀 {ccu} 的 {cs}。',
      learningFocus: '目前主要投入後端與資料服務、Linux／Kubernetes 平台、AI 模型推論與數位孿生系統整合，如果想了解實際成果，歡迎到 {about} 或 {projects} 看看。',
      links: {
        ccu: '國立中正大學',
        cs: '資訊工程研究所',
        about: '關於我',
        projects: '作品集',
      },
    },
  },
  about: {
    personal: {
      basic: {
        male: '男',
        details: '性別：{gender}　年齡：{age}',
        education: '學歷',
        educationDetail: '國立中正大學 資訊工程研究所 碩士生',
        motto: '總是會在專業領域上盡自己最大能力去協助他人，用心與堅持的毅力面對人生的每一次挑戰。',
      },
      summary: '我目前就讀國立中正大學資訊工程研究所，專注於 Backend / Platform Engineering、AI Systems 與 MLOps。曾建置後端服務、ML 推論流程、Kubernetes 部署、CI/CD 與 Linux 基礎設施，參與 CNCF KServe 開源貢獻，也投入數位孿生、電腦視覺與聯邦學習相關專案。',
      resumeDownload: '下載英文履歷（PDF）',
    },
    certificates: {
      header: '證照',
      table: {
        index: '#',
        year: '年份',
        name: '名稱',
        level: '級別',
      },
      count: '統計筆數：{count}',
    },
    resume: {
      education: {
        header: '學歷',
        items: {
          ccu: {
            period: '2025/08 ~ 2027/08（預計畢業）',
            school: '國立中正大學 資訊工程研究所 / 碩士',
          },
          nutc: {
            period: '2021/09 ~ 2025/06',
            school: '國立臺中科技大學 智慧生產工程系 / 學士',
          },
        },
      },
      experience: {
        header: '工作經歷',
        items: {
          ccuResearch: {
            period: '2025/08 ~ 現在',
            company: '國立中正大學 / 研究助理／專案負責人',
            highlights: [
              '帶領 4 人跨國團隊，以 FastAPI、PostgreSQL/PostGIS、Redis 與 Docker 建置智慧防災數位孿生系統（TAG-Twin）。',
              '開發 API、空間資料管線與 ML 推論流程，串接模擬、GIS、決策支援與視覺化。',
              '使用 GitHub Actions 建立 CI/CD、自動化部署與驗證流程。',
            ],
          },
          ccuSysadmin: {
            period: '2025/08 ~ 現在',
            company: '國立中正大學 / 系統管理員',
            highlights: [
              '維護 Linux 伺服器、GPU 工作站、Docker 環境、網路、儲存設備、SSH 存取與共用研究基礎設施。',
            ],
          },
          paia: {
            period: '2024/07 ~ 2025/06',
            company: 'PAIA 帕亞科技股份有限公司 / 後端軟體開發實習工程師',
            platform: 'Playful AI Arena, PAIA 帕亞學習平台',
            highlights: [
              '使用 Python、Django Ninja、Pydantic、PostgreSQL 與 MongoDB 開發後端服務。',
              '實作 REST API、資料驗證、資料庫模型、日誌與錯誤處理。',
              '撰寫單元測試與整合測試，並參與 Code Review 與 Agile/Scrum 開發流程。',
            ],
          },
          codingApe: {
            period: '2023/03 ~ 2025/06',
            company: 'Coding APE 猿創力程式設計學校 / 程式設計講師',
            corp: '壞主意股份有限公司(CODINGAPE CO., LTD.)',
          },
        },
      },
      skills: {
        header: '技能',
        groups: {
          languages: '程式語言',
          backend: '後端與資料',
          aiml: 'AI / ML',
          platform: '平台與 MLOps',
          digitalIc: '數位 IC（課程實作）',
        },
      },
    },
  },
  projects: {
    featured: {
      items: {
        kserve: {
          title: 'KServe (CNCF)',
          category: '開源貢獻',
          role: '開源貢獻者',
          period: '2025/09 ~ 現在',
          summary: '修正 KServe 的 Python logging 問題，修補已合併至上游；並提交 ServingRuntimePodSpec 與 WorkerSpec 的 runtimeClassName 支援，包含測試與 CRD/OpenAPI 更新。',
        },
        tagTwin: {
          title: '智慧防災數位孿生系統（TAG-Twin）',
          category: '後端與數位孿生',
          role: '專案負責人',
          period: '2025/08 ~ 現在',
          summary: '建置平台核心後端與資料平台，整合 GIS 資料、淹水模擬、風險資料、避難路線與 Unreal Engine 視覺化；並開發資料與 ML 推論管線、API 與 WebSocket 介面，串接模擬、決策與視覺化模組。',
        },
        federatedAqi: {
          title: '跨國聯邦式空氣品質分析與部署平台',
          category: '聯邦學習與 MLOps',
          role: '系統規劃與整合',
          period: '2026/08 ~ 2026/09',
          summary: '主導 CCU × UBM 跨國聯邦式空氣品質分析與部署平台的系統規劃與跨團隊整合，定義資料集準備、Flower 訓練、部署、推論與監控之間的介面與交接規範；並將聯邦全域模型整合至 UBM AI 部署平台，完成 AQI 推論、Grafana 監控、端到端測試與最終部署。',
        },
        environmentalEnforcement: {
          title: 'AI 環保科技執法影像分析系統',
          category: '電腦視覺',
          period: '2025/09 ~ 現在',
          summary: '建置整合 D-FINE、ByteTrack、姿態分析、VLM 與 OCR 的 CCTV 事件分析流程；將 GPU 推論與後處理拆開以避免重複推論，系統已部署於實際場域使用。',
        },
      },
      status: {
        merged: '已合併',
        open: '審查中',
      },
      privateSource: '原始碼未公開',
      header: '精選專案',
    },
    tools: {
      header: '開源資料工程與治理工具組',
      description: '整理多來源研究資料時反覆遇到的問題，拆分成可以獨立使用的開源工具。',
      items: {
        releaseGuard: '透過設定檔檢查資料欄位格式、唯一性、跨表關聯、時間順序與檔案完整性，整合 GitHub Actions，並提供 Linux、Windows 與 macOS 執行版本。',
        gridForge: '建立固定規格的空間網格，統一對齊點、面與柵格資料，處理座標系統轉換、網格識別、資料合併與驗證，並發布至 PyPI。',
        lineageGuard: '在本機驗證產出檔案的來源、身分與處理歷程。',
        evidenceMatrix: '盤點多來源資料中每個實體的來源證據覆蓋情況。',
        entityLinkage: '將外部資料比對到標準實體清單，並保留無法對應或多重對應的情況，不在資料不足時自行推測。',
      },
    },
    github: {
      noProjects: '目前沒有可顯示的公開儲存庫。',
      header: '我在 GitHub 上的開源專案',
      loading: '正在載入 {tab} 的 GitHub 專案...',
      apiErrorTitle: 'GitHub API 功能修復中',
      apiErrorDesc: '由於 GitHub API 速率限制問題，此功能暫時無法正常運作。\n我們正在修復這個問題，敬請見諒！',
      visitDirectly: '您仍可以直接訪問我的 GitHub 主頁查看所有專案：',
      visitDirectlyShort: '您仍可以直接訪問我的 GitHub 主頁：',
      loadingBtn: '載入中...',
      retryBtn: '嘗試重新載入',
      table: {
        index: '#',
        name: '名稱',
        url: '網址',
        desc: '描述',
        noDesc: '無描述',
        count: '統計筆數：{count}',
      },
    },
  },
  projectDetail: {
    headings: {
      overview: '專案概述',
      problem: '問題與目標',
      role: '我的角色與貢獻',
      architecture: '系統架構與技術',
      tradeoffs: '技術選擇與取捨',
      outcomes: '成果與驗證',
      links: '相關連結',
    },
    viewDetails: '查看專案介紹',
    backToProjects: '回到作品集',
    kserve: {
      title: 'KServe (CNCF) 開源貢獻',
      overview: [
        'KServe 是 CNCF 旗下、在 Kubernetes 上部署與管理機器學習模型推論服務的開源平台。我提交了兩項改動：修正 Python SDK 會覆蓋使用者日誌設定的問題，以及讓 ServingRuntime 可以指定 Kubernetes RuntimeClass。',
      ],
      problem: [
        '日誌設定：未傳入 log_config 時，configure_logging() 一律套用 KServe 預設的 dictConfig，覆蓋使用者已設定好的 handler 與格式，讓 KServe 難以整合進有自己日誌流程的應用程式（kserve/kserve#3919）。',
        'RuntimeClass：ServingRuntime 無法指定 runtimeClassName（例如 nvidia、kata、gvisor），而這是使用 GPU passthrough 或沙箱容器執行環境時常見的需求（kserve/kserve#5057）。',
      ],
      role: [
        '兩項改動皆由我實作並提交 Pull Request，內容包含程式修改、單元測試、自動產生檔案的更新與 PR 說明。',
      ],
      architecture: [
        'Python SDK（kserve/logging.py）：在 configure_logging() 加入判斷，以 logger.hasHandlers() 偵測 kserve logger 上直接或繼承而來的 handler；未指定 log_config 且已有 handler 時直接返回，不再覆寫。',
        'Go 控制器與 CRD：在 v1alpha1 的 ServingRuntimePodSpec 新增 RuntimeClassName 欄位，並在 InferenceService 的 MergePodSpec 中合併；WorkerSpec 透過內嵌結構一併支援。',
        '自動產生檔案：同步更新 CRD（Helm chart 與 config）、deepcopy、OpenAPI／Swagger，以及 Python SDK 的模型與文件。',
      ],
      tradeoffs: [
        '維持相容：只有在「未指定設定且已有 handler」時才略過預設設定；沒有自行設定日誌的使用者行為不變，明確傳入的 log_config 仍然優先。',
        '使用 hasHandlers() 而不是檢查 handler 數量，才能涵蓋從上層 logger 繼承的 handler。',
        'runtimeClassName 沿用專案中 schedulerName（kserve/kserve#5073）的合併模式，與既有程式一致、也較容易審查；欄位為選填，不影響既有的 ServingRuntime。',
        'E2E 測試與官方文件更新列為後續項目，沒有包含在 PR 中。',
      ],
      outcomes: [
        '日誌修正（kserve/kserve#4687）已於 2026 年 3 月合併至上游，並新增三個單元測試：保留使用者的 handler、未設定時套用預設、明確設定時覆寫。',
        'runtimeClassName 支援（kserve/kserve#5198）新增合併與覆寫兩個單元測試，並在本機建立 runtimeClassName: nvidia 的 ServingRuntime，確認產生的 PodSpec 帶有該欄位。',
      ],
      contributions: {
        logging: '日誌設定修正',
        runtimeClassName: 'runtimeClassName 支援',
      },
    },
  },
  contact: {
    page: {
      heroTitle: 'Chien-Hsun Chang',
    },
    info: {
      header: '聯絡資訊',
      discord: 'Discord',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: '電子郵件',
    },
    form: {
      header: '聯絡表單',
      name: '名稱',
      namePlaceholder: '讓我知道該如何稱呼您吧！',
      email: '電子郵件地址',
      emailPlaceholder: '請輸入您的電子郵件地址，這樣才能回復您唷！',
      message: '內文',
      messagePlaceholder: '讓我知道您想說明或聯絡的內容吧！',
      send: '預覽郵件內容',
      helper: '此表單會協助建立郵件，實際寄送仍需由你的郵件程式完成。',
      subjectPrefix: '來自 {name} 的聯絡訊息',
      bodyTemplate: '姓名：{name}\n電子郵件：{email}\n\n訊息內容：\n{message}',
      mailOpened: '已嘗試開啟郵件程式，請確認是否成功開啟並自行寄出。',
      emailModal: {
        openMail: '開啟郵件程式',
        title: '郵件內容',
        desc: '若未開啟郵件程式，可複製下方郵件內容自行寄送。',
        recipient: '收件人',
        subject: '主旨',
        body: '內容',
        copyAll: '複製全部內容',
        close: '關閉',
        copySuccess: '郵件內容已複製到剪貼簿！您可以貼到您的郵件應用程式中。',
        copyFail: '複製失敗，請手動選取複製上述內容。',
      },
    },
  },
  ui: {
    navigation: {
      primary: '主要導覽',
    },
    language: {
      label: '語言',
    },
    skipToMain: '跳到主要內容',
    theme: {
      light: '切換到淺色模式',
      dark: '切換到深色模式',
    },
    drawer: {
      title: '導航欄',
      close: '關閉選單',
    },
  },
};
