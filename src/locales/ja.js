export default {
  nav: {
    home: 'ホーム',
    about: '私について',
    projects: 'プロジェクト',
    contact: '連絡先',
  },
  home: {
    hero: {
      introduction: '現在大学院生で、暇なときに小さなプロジェクトを作るのが好きです。ほとんどがオープンソースのリポジトリですので、ぜひアイデアを交換してください。 ヾ(*´∀ ˋ*)ﾉ',
      seeMore: 'もっと見る',
    },
    quote: {
      main: '人生とコーディングはどちらも print("Hello World"); から始まります。',
      cite: "人の誕生は世界への挨拶であり、'Hello World' は私たちに新しい章を与えます。",
    },
    featuredPhotos: {
      ministry: {
        header: '台湾教育部の潘文忠部長との写真',
        description: '2023年国際発明展金賞受賞学生の接見イベントに参加しました。',
      },
      coscup: {
        header: 'COSCUP',
        description: 'COSCUP 2023のLightning Talkで講演者を務めました。',
      },
    },
    infoCards: {
      intro: 'はい、それは私です。台湾出身の開発者で、現在 {ccu} の {cs} に在籍しています。',
      learningFocus: '私の学習の焦点は、ソフトウェアとハードウェアの統合、フルスタック開発、人工知能に関するものです。私についてもっと知りたい場合は、{about} または {projects} を訪問してください。',
      links: {
        ccu: '国立中正大学',
        cs: 'コンピュータサイエンス学科',
        about: '私について',
        projects: 'プロジェクト',
      },
      waterMirror: {
        header: 'WaterMirror 水之鏡',
        description: 'これは大学の友人と共同で開発した研究プロジェクトです。このプロジェクトは、{sklearn} フレームワークに基づいた、インテリジェントな水質分析および評価システムです。このシステムは、特定の水質実験データを分析し、人工知能と機械学習を通じて評価と早期警告を実現します。',
      },
      codeRyo: {
        header: 'CodeRyo Studio',
        description: `志を同じくする友人たちと一緒に、CodeRyo チームを設立しました。私たちはサーバーサービスとインテリジェントな金融取引に注力しています。
        "未来を未来だけにしない" というスローガンは、情報分野とオープンソースコミュニティへの貢献を目指し、自分たちの能力を向上させるという私たちの願いを反映しています。`,
      },
    },
  },
  about: {
    personal: {
      basic: {
        gender: '性別',
        male: '男',
        age: '年齢',
        education: '学歴',
        educationDetail: '国立中正大学 コンピュータサイエンス研究科 1年生',
        motto: '常に専門分野で最善を尽くして他者を助け、真心と粘り強さで人生のあらゆる挑戦に立ち向かいます。',
      },
    },
    certificates: {
      header: '資格',
      table: {
        index: '#',
        year: '年',
        name: '名称',
        level: 'レベル',
        number: '番号',
      },
      count: '合計：{count}',
    },
    resume: {
      education: {
        header: '学歴',
        gradSchool: {
          period: '2025~',
          school: '国立中正大学 コンピュータサイエンス研究科 / 修士',
        },
        college: {
          period: '2021~2024',
          school: '国立台中科技大学 インテリジェント生産工学科 / 学士',
        },
      },
      experience: {
        header: '職務経歴',
        paia: {
          period: '2024~2025',
          company: 'PAIA-Tech株式会社 / バックエンドソフトウェアエンジニア',
          platform: 'Playful AI Arena, PAIA学習プラットフォーム',
        },
        codingApe: {
          period: '2023~2025',
          company: 'Coding APE プログラミングスクール / 講師',
          corp: 'Bad Idea株式会社 (CODINGAPE CO., LTD.)',
        },
        kaohsiung: {
          period: '2018~2021',
          company: '高雄市情報育成協会 / 教学アシスタント',
        },
      },
    },
  },
  projects: {
    featured: {
      header: '注目プロジェクト',
    },
    github: {
      header: 'GitHub上のオープンソースプロジェクト',
      loading: '{tab} の GitHub プロジェクトを読み込み中...',
      apiErrorTitle: 'GitHub API メンテナンス中',
      apiErrorDesc: 'GitHub API のレート制限により、この機能は一時的に利用できません。\n現在修正作業中です。ご迷惑をおかけして申し訳ありません。',
      visitDirectly: 'すべてのプロジェクトを見るには、GitHub プロフィールに直接アクセスできます：',
      visitDirectlyShort: 'GitHub プロフィールに直接アクセスできます：',
      loadingBtn: '読み込み中...',
      retryBtn: '再試行',
      table: {
        index: '#',
        name: '名前',
        url: 'URL',
        desc: '説明',
        noDesc: '説明なし',
        count: '合計：{count}',
      },
    },
  },
  contact: {
    page: {
      heroTitle: 'Chien-Hsun Chang',
      heroSubtitle: 'Developer, Programmer, and Student in TAIWAN.',
    },
    info: {
      header: '連絡先情報',
      discord: 'Discord',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'メール',
    },
    form: {
      header: '連絡フォーム',
      name: '名前',
      namePlaceholder: 'お名前を教えてください！',
      gender: '性別',
      male: '男性',
      female: '女性',
      other: 'その他',
      email: 'メールアドレス',
      emailPlaceholder: '返信できるようにメールアドレスを入力してください！',
      message: '内容',
      messagePlaceholder: 'ご用件やご連絡内容をお知らせください！',
      send: '送信',
      sending: '送信中...',
      subjectPrefix: '{name} からの連絡メッセージ',
      bodyTemplate: '名前：{name}\n性別：{gender}\nメール：{email}\n\nメッセージ：\n{message}',
      mailOpened: 'メールアプリが開きました。送信をご確認ください！',
      mailNotOpened: 'メールアプリが正しく開かなかった可能性があります。\n\nOKをクリックすると代替案を表示し、キャンセルをクリックするとフォーム内容を保持します。',
      sendFail: '送信に失敗しました：{msg}\n\n直接 kageryo@coderyo.com へメールするか、他の連絡方法をご利用ください。',
      emailModal: {
        title: 'メール内容',
        desc: '環境の制限により、メールアプリを直接開くことができません。以下の内容をコピーして手動で送信してください：',
        recipient: '宛先',
        subject: '件名',
        body: '本文',
        copyAll: 'すべてコピー',
        close: '閉じる',
        copySuccess: 'メール内容がクリップボードにコピーされました！メールアプリに貼り付けてください。',
        copyFail: 'コピーに失敗しました。上記の内容を手動で選択してコピーしてください。',
      },
    },
  },
  ui: {
    theme: {
      light: 'ライトモードに切り替え',
      dark: 'ダークモードに切り替え',
    },
    drawer: {
      title: 'ナビゲーション',
      close: 'メニューを閉じる',
    },
  },
};
