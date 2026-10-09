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
      introduction: '目前是研究生一枚，有空的時候會想一些小東西來做，基本上全部都會是開源的Repo，歡迎互相交流交流。 ヾ(*´∀ ˋ*)ﾉ',
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
      learningFocus: '目前學習方向涉及軟硬體整合、前後端開發與人工智慧，如果對我想要有進一步的了解歡迎到 {about} 或 {projects} 看看。',
      links: {
        ccu: '國立中正大學',
        cs: '資訊工程研究所',
        about: '關於我',
        projects: '作品集',
      },
      codeRyo: {
        header: 'CodeRyo Studio',
        description: '我和幾位志同道合的好友共同成立了 CodeRyo 團隊，我們致力於伺服器服務以及智慧化金融交易等，\n        並將「使未來不只是未來。」訂為我們的標語，期望能對資訊領域以及開源社群有所貢獻，並增強自我能力。',
      },
    },
  },
  about: {
    personal: {
      basic: {
        gender: '性別',
        male: '男',
        age: '年齡',
        education: '學歷',
        educationDetail: '國立中正大學 資訊工程研究所 二年級',
        motto: '總是會在專業領域上盡自己最大能力去協助他人，用心與堅持的毅力面對人生的每一次挑戰。',
      },
    },
    certificates: {
      header: '證照',
      table: {
        index: '#',
        year: '年份',
        name: '名稱',
        level: '級別',
        number: '序號',
      },
      count: '統計筆數：{count}',
    },
    resume: {
      education: {
        header: '學歷',
        gradSchool: {
          period: '2025~',
          school: '國立中正大學 資訊工程研究所 / 碩士',
        },
        college: {
          period: '2021~2025',
          school: '國立臺中科技大學 智慧生產工程系 / 學士',
        },
      },
      experience: {
        header: '工作經歷',
        paia: {
          period: '2024~2025',
          company: 'PAIA-Tech. 帕亞科技股份有限公司 / 後端軟體開發工程師',
          platform: 'Playful AI Arena, PAIA 帕亞學習平台',
        },
        codingApe: {
          period: '2023~2025',
          company: 'Coding APE 猿創力程式設計學校 / 講師',
          corp: '壞主意股份有限公司(CODINGAPE CO., LTD.)',
        },
        kaohsiung: {
          period: '2018~2021',
          company: '社團法人高雄市資訊培育協會 / 教學助理',
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
