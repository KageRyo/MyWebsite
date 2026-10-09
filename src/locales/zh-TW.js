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
        minxiongHydroCast: { description: '民雄地區水文預報工具。' },
        bybitPredict: { description: '使用 Python 與 Bybit API 預測加密貨幣趨勢。' },
        concentration: { description: '以 Hololive 為主題的翻牌配對遊戲。' },
        myWebsite: { description: '此個人網站的原始碼。' },
      },
      header: '精選專案',
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
