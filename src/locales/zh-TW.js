export default {
  nav: {
    home: '首頁',
    about: '關於我',
    projects: '作品集',
    contact: '聯絡我',
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
      waterMirror: {
        header: 'WaterMirror 水之鏡',
        description: '我和大學友人共同開發的專題研究專案，此專案為一基於 {sklearn} 框架開發機器學習模型的智慧化水質分析與評估系統，能夠分析特定的水質實驗數值與資料，並藉由人工智慧機器學習達到分析評估與預警。',
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
        educationDetail: '國立中正大學 資訊工程研究所 一年級',
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
          period: '2021~2024',
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
      header: '精選專案',
    },
    github: {
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
