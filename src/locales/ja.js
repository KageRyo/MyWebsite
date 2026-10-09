export default {
  meta: {
    home: { title: 'KageRyo Developer - ホーム' },
    about: { title: 'KageRyo Developer - 私について' },
    projects: { title: 'KageRyo Developer - プロジェクト' },
    contact: { title: 'KageRyo Developer - お問い合わせ' },
    notFound: { title: 'KageRyo Developer - ページが見つかりません' },
  },
  nav: {
    home: 'ホーム',
    about: '私について',
    projects: 'プロジェクト',
    contact: '連絡先',
  },
  notFound: {
    message: 'お探しのページは見つかりませんでした。',
    backHome: 'ホームに戻る',
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
        educationDetail: '国立中正大学 コンピュータサイエンス研究科 修士課程在籍',
        motto: '常に専門分野で最善を尽くして他者を助け、真心と粘り強さで人生のあらゆる挑戦に立ち向かいます。',
      },
      summary: '国立中正大学の情報工学研究科修士課程に在籍し、バックエンド／プラットフォームエンジニアリング、AI システム、MLOps に取り組んでいます。バックエンドサービス、ML 推論ワークフロー、Kubernetes デプロイ、CI/CD パイプライン、Linux インフラの構築経験があり、CNCF KServe へのコントリビュートのほか、デジタルツイン、コンピュータビジョン、連合学習のプロジェクトにも携わっています。',
      resumeDownload: '英語版の履歴書をダウンロード（PDF）',
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
        items: {
          ccu: {
            period: '2025年8月 ~ 2027年8月（修了予定）',
            school: '国立中正大学 コンピュータサイエンス研究科 / 修士',
          },
          nutc: {
            period: '2021年9月 ~ 2025年6月',
            school: '国立台中科技大学 インテリジェント生産工学科 / 学士',
          },
        },
      },
      experience: {
        header: '職務経歴',
        items: {
          ccuResearch: {
            period: '2025年8月 ~ 現在',
            company: '国立中正大学 / リサーチアシスタント・プロジェクトリード',
            highlights: [
              '4名の国際チームを率い、FastAPI、PostgreSQL/PostGIS、Redis、Docker で洪水災害デジタルツイン基盤を構築。',
              'シミュレーション、GIS、意思決定支援、可視化をつなぐ API、空間データパイプライン、ML 推論ワークフローを開発。',
              'GitHub Actions で CI/CD、自動デプロイ、検証ワークフローを構築。',
            ],
          },
          ccuSysadmin: {
            period: '2025年8月 ~ 現在',
            company: '国立中正大学 / システム管理者',
            highlights: [
              'Linux サーバー、GPU ワークステーション、Docker 環境、ネットワーク、ストレージ、SSH アクセス、共有研究インフラを管理。',
            ],
          },
          paia: {
            period: '2024年7月 ~ 2025年6月',
            company: 'PAIA Technology Co., Ltd. / バックエンドソフトウェアエンジニア（インターン）',
            platform: 'Playful AI Arena, PAIA学習プラットフォーム',
            highlights: [
              'Python、Django Ninja、Pydantic、PostgreSQL、MongoDB でバックエンドサービスを開発。',
              'REST API、バリデーション、データベースモデル、ログ、エラーハンドリングを実装。',
              'ユニットテスト・統合テストを作成し、コードレビューや Agile/Scrum 開発に参加。',
            ],
          },
          codingApe: {
            period: '2023年3月 ~ 2025年6月',
            company: 'Coding APE プログラミングスクール / プログラミング講師',
            corp: 'Bad Idea株式会社 (CODINGAPE CO., LTD.)',
          },
        },
      },
      skills: {
        header: 'スキル',
        groups: {
          languages: 'プログラミング言語',
          backend: 'バックエンド・データ',
          aiml: 'AI / ML',
          platform: 'プラットフォーム・MLOps',
          digitalIc: 'デジタル IC（授業での実習）',
        },
      },
    },
  },
  projects: {
    featured: {
      items: {
        minxiongHydroCast: { description: '民雄地域の水文予報ツール。' },
        bybitPredict: { description: 'Python と Bybit API を使った暗号資産トレンド予測。' },
        concentration: { description: 'Hololive をテーマにした神経衰弱ゲーム。' },
        myWebsite: { description: 'この個人サイトのソースコード。' },
      },
      header: '注目プロジェクト',
    },
    github: {
      noProjects: '表示できる公開リポジトリはありません。',
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
        openMail: 'メールアプリを開く',
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
    navigation: {
      primary: 'メインナビゲーション',
    },
    language: {
      label: '言語',
    },
    skipToMain: 'メインコンテンツへ移動',
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
