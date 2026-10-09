export default {
  meta: {
    home: { title: 'KageRyo Developer - 首頁' },
    about: { title: 'KageRyo Developer - 關於我' },
    projects: { title: 'KageRyo Developer - 作品集' },
    contact: { title: 'KageRyo Developer - 聯絡我' },
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
  contact: {
    page: {
      heroTitle: 'Chien-Hsun Chang',
      heroSubtitle: 'Developer, Programmer, and Student in TAIWAN.',
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
      gender: '性別',
      male: '男性',
      female: '女性',
      other: '其它',
      email: '電子郵件地址',
      emailPlaceholder: '請輸入您的電子郵件地址，這樣才能回復您唷！',
      message: '內文',
      messagePlaceholder: '讓我知道您想說明或聯絡的內容吧！',
      send: '送出',
      sending: '送出中...',
      subjectPrefix: '來自 {name} 的聯絡訊息',
      bodyTemplate: '姓名：{name}\n性別：{gender}\n電子郵件：{email}\n\n訊息內容：\n{message}',
      mailOpened: '郵件應用程式已開啟，請確認發送！',
      mailNotOpened: '郵件應用程式可能沒有正確開啟。\n\n點擊「確定」查看備用方案，或點擊「取消」保留表單內容。',
      sendFail: '發送失敗：{msg}\n\n請直接發送郵件到 kageryo@coderyo.com 或使用其他聯絡方式。',
      emailModal: {
        openMail: '開啟郵件程式',
        title: '郵件內容',
        desc: '由於環境限制，無法直接開啟郵件應用程式。請複製以下內容手動發送郵件：',
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
