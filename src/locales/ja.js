export default {
  meta: {
    home: {
      title: "Chien-Hsun Chang {'|'} バックエンド・プラットフォーム・AI システム",
      description: '国立中正大学の修士課程で学ぶ Chien-Hsun Chang のポートフォリオ。バックエンド、プラットフォーム、AI システム、MLOps、KServe へのコントリビュート、スマート防災デジタルツイン、AI 映像解析、国際連携の連合学習を紹介します。',
    },
    about: {
      title: 'KageRyo Developer - 私について',
      description: 'Chien-Hsun Chang の学歴、職務経歴、スキル、オープンソースへの貢献を紹介します。',
    },
    projects: {
      title: 'KageRyo Developer - プロジェクト',
      description: 'KServe へのコントリビュート、スマート防災デジタルツインシステム（TAG-Twin）、AI 環境違反取締り映像解析システム、国際連携・連合学習による空気質分析・デプロイ基盤などの注目プロジェクトと GitHub のオープンソース作品を紹介します。',
    },
    contact: {
      title: 'KageRyo Developer - お問い合わせ',
      description: 'メール、GitHub、LinkedIn から Chien-Hsun Chang に連絡できます。ソフトウェア開発、AI システム、オープンソースについて気軽にどうぞ。',
    },
    kserveProject: {
      title: 'KageRyo Developer - KServe (CNCF) へのコントリビュート',
      description: 'Chien-Hsun Chang による CNCF KServe へのコントリビュート：ユーザーのロギング設定を上書きする問題の修正と、ServingRuntime への runtimeClassName 対応。',
    },
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
      introduction: 'こんにちは、健勳です。国立中正大学の情報工学研究科で学ぶ修士課程の学生です。小さなツールの開発やオープンソースへの貢献が好きで、バックエンド／プラットフォーム、AI システム、MLOps の研究・開発にも取り組んでいます。ぜひプロジェクトをご覧ください！ヾ(*´∀ ˋ*)ﾉ',
      academic: '国立中正大学 修士課程｜2027年8月修了予定',
      availability: '2027年の早期採用、および台湾の研究開発代替役（兵役の代わりに企業で研究開発業務に従事する制度）に対応可能',
      viewProjects: 'プロジェクト一覧',
      downloadResume: '履歴書（PDF）',
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
      learningFocus: '現在はバックエンド／データサービス、Linux・Kubernetes プラットフォーム、AI モデル推論、デジタルツインのシステム統合に取り組んでいます。詳しくは {about} と {projects} をご覧ください。',
      links: {
        ccu: '国立中正大学',
        cs: 'コンピュータサイエンス学科',
        about: '私について',
        projects: 'プロジェクト',
      },
    },
  },
  about: {
    personal: {
      basic: {
        male: '男性',
        details: '性別：{gender}・年齢：{age}',
        education: '学歴',
        educationDetail: '国立中正大学 コンピュータサイエンス研究科 修士課程在籍',
        motto: '常に専門分野で最善を尽くして他者を助け、真心と粘り強さで人生のあらゆる挑戦に立ち向かいます。',
      },
      summary: '国立中正大学の情報工学研究科修士課程に在籍し、バックエンド／プラットフォームエンジニアリング、AI システム、MLOps に取り組んでいます。バックエンドサービス、ML 推論ワークフロー、Kubernetes デプロイ、CI/CD パイプライン、Linux インフラの構築経験があり、CNCF KServe へのコントリビュートのほか、デジタルツイン、コンピュータビジョン、連合学習のプロジェクトにも携わっています。',
      resumeDownload: '英語版履歴書（PDF）',
    },
    certificates: {
      header: '資格',
      table: {
        index: '#',
        year: '年',
        name: '名称',
        level: 'レベル',
      },
      count: '合計：{count}',
    },
    resume: {
      education: {
        header: '学歴',
        items: {
          ccu: {
            period: '2025年8月 ~ 2027年8月（修了予定）',
            school: '国立中正大学',
            degree: 'コンピュータサイエンス研究科 修士',
          },
          nutc: {
            period: '2021年9月 ~ 2025年6月',
            school: '国立台中科技大学',
            degree: 'インテリジェント生産工学科 学士',
          },
        },
      },
      experience: {
        header: '職務経歴',
        items: {
          ccuResearch: {
            period: '2025年8月 ~ 現在',
            organization: '国立中正大学',
            role: 'リサーチアシスタント・プロジェクトリード',
            highlights: [
              '4名の国際チームを率い、FastAPI、PostgreSQL/PostGIS、Redis、Docker でスマート防災デジタルツインシステム（TAG-Twin）を構築。',
              'シミュレーション、GIS、意思決定支援、可視化をつなぐ API、空間データパイプライン、ML 推論ワークフローを開発。',
              'GitHub Actions で CI/CD、自動デプロイ、検証ワークフローを構築。',
            ],
          },
          ccuSysadmin: {
            period: '2025年8月 ~ 現在',
            organization: '国立中正大学',
            role: 'システム管理者',
            highlights: [
              'Linux サーバー、GPU ワークステーション、Docker 環境、ネットワーク、ストレージ、SSH アクセス、共有研究インフラを管理。',
            ],
          },
          paia: {
            period: '2024年7月 ~ 2025年6月',
            organization: 'PAIA Technology Co., Ltd.',
            role: 'バックエンドソフトウェアエンジニア（インターン）',
            platform: 'Playful AI Arena, PAIA学習プラットフォーム',
            highlights: [
              'Python、Django Ninja、Pydantic、PostgreSQL、MongoDB でバックエンドサービスを開発。',
              'REST API、バリデーション、データベースモデル、ログ、エラーハンドリングを実装。',
              'ユニットテスト・統合テストを作成し、コードレビューや Agile/Scrum 開発に参加。',
            ],
          },
          codingApe: {
            period: '2023年3月 ~ 2025年6月',
            organization: 'Coding APE プログラミングスクール',
            role: 'プログラミング講師',
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
        kserve: {
          title: 'KServe (CNCF)',
          category: 'オープンソース',
          role: 'オープンソースコントリビューター',
          period: '2025年9月 ~ 現在',
          summary: 'KServe の Python ロギングの問題を修正し、パッチはアップストリームにマージされました。ServingRuntimePodSpec と WorkerSpec への runtimeClassName 対応も、テストと CRD/OpenAPI の更新を含めて提出しています。',
        },
        tagTwin: {
          title: 'スマート防災デジタルツインシステム（TAG-Twin）',
          category: 'バックエンド・デジタルツイン',
          role: 'プロジェクトリード',
          period: '2025年8月 ~ 現在',
          summary: 'GIS データ、洪水シミュレーション、リスクデータ、避難経路、Unreal Engine による可視化を統合するコアバックエンドとデータ基盤を構築。シミュレーション・意思決定・可視化モジュールをつなぐデータ／ML 推論パイプライン、API、WebSocket インターフェースも開発しました。',
        },
        federatedAqi: {
          title: '国際連携・連合学習による空気質分析・デプロイ基盤',
          category: '連合学習・MLOps',
          role: 'システム設計・統合',
          period: '2026年8月 ~ 2026年9月',
          summary: 'CCU × UBM の国際連携・連合学習による空気質分析・デプロイ基盤でシステム設計とチーム横断の統合を主導し、データセット準備、Flower による学習、デプロイ、推論、監視の間のインターフェースと引き継ぎ仕様を定義。連合グローバルモデルを UBM AI Deployment Platform に統合し、AQI 推論、Grafana 監視、E2E テスト、最終デプロイまで担当しました。',
        },
        environmentalEnforcement: {
          title: 'AI 環境違反取締り映像解析システム',
          category: 'コンピュータビジョン',
          period: '2025年9月 ~ 現在',
          summary: 'D-FINE、ByteTrack、姿勢推定、VLM、OCR を組み合わせた CCTV イベント解析パイプラインを構築。GPU 推論と後処理を分離して重複推論を避け、現場で運用できるようデプロイしました。',
        },
      },
      status: {
        merged: 'マージ済み',
        open: 'レビュー中',
      },
      privateSource: 'ソースコード非公開',
      header: '注目プロジェクト',
    },
    tools: {
      header: 'オープンソースのデータエンジニアリング・ガバナンスツール群',
      description: '複数ソースの研究データを整備する中で繰り返し直面した課題を、単独で使えるオープンソースツールとして切り出したものです。',
      items: {
        releaseGuard: '設定ファイルに基づき、データの列形式、一意性、テーブル間の関係、時系列の順序、ファイルの整合性を検証。GitHub Actions に対応し、Linux・Windows・macOS 向けのバイナリを提供しています。',
        gridForge: '固定仕様の空間グリッドを作成し、点・面・ラスターデータを揃えて、座標系の変換、グリッド ID、データ統合と検証を行います。PyPI で公開しています。',
        lineageGuard: '成果物の出所・識別情報・処理履歴を検証するローカル CLI。',
        evidenceMatrix: '複数ソースのデータセットについて、エンティティごとのソース証拠のカバレッジを監査します。',
        entityLinkage: '外部レコードを正規のエンティティ集合に対応付け、対応なしや複数候補のケースを推測せずにそのまま残します。',
      },
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
  projectDetail: {
    headings: {
      contributions: 'コントリビュートの概要',
      problem: '課題と目標',
      role: '自分の役割・貢献',
      architecture: 'アーキテクチャ・技術',
      tradeoffs: '技術的な選択・トレードオフ',
      outcomes: '成果・検証',
      media: '成果・メディア',
    },
    coverage: 'メディア掲載',
    credit: '出典：{source}',
    viewDetails: 'プロジェクトの詳細を見る',
    backToProjects: 'プロジェクト一覧に戻る',
    kserve: {
      title: 'KServe (CNCF) へのコントリビュート',
      overview: [
        'KServe は、Kubernetes 上で機械学習の推論サービスをデプロイ・管理するための CNCF のオープンソースプラットフォームです。Python SDK がユーザーのロギング設定を上書きしてしまう問題の修正と、ServingRuntime で Kubernetes の RuntimeClass を指定できるようにする変更の 2 件を提出しました。',
      ],
      problem: [
        'ロギング設定：log_config を渡さない場合、configure_logging() は常に KServe の既定の dictConfig を適用し、ユーザーが設定済みのハンドラーやフォーマットを上書きしていました。独自のロギングを持つアプリケーションに KServe を組み込みにくい原因になっていました（kserve/kserve#3919）。',
        'RuntimeClass：ServingRuntime で runtimeClassName（nvidia、kata、gvisor など）を指定できず、GPU パススルーやサンドボックス型コンテナランタイムを使う際の一般的な要件を満たせませんでした（kserve/kserve#5057）。',
      ],
      role: [
        '2 件とも自分で実装して Pull Request を提出しました。コード変更、ユニットテスト、自動生成ファイルの更新、PR の説明を含みます。',
      ],
      architecture: [
        'Python SDK（kserve/logging.py）：configure_logging() で logger.hasHandlers() により kserve ロガーに直接または継承されたハンドラーがあるかを確認し、log_config が未指定でハンドラーが既にある場合は再設定せずに終了します。',
        'Go コントローラーと CRD：v1alpha1 の ServingRuntimePodSpec に RuntimeClassName フィールドを追加し、InferenceService の MergePodSpec でマージします。WorkerSpec もインライン埋め込みにより対応します。',
        '自動生成ファイル：CRD（Helm チャートと config）、deepcopy、OpenAPI／Swagger、Python SDK のモデルとドキュメントをまとめて再生成しました。',
      ],
      tradeoffs: [
        '後方互換性：既定の設定を省略するのは「設定が未指定かつハンドラーが既にある」場合だけなので、独自のロギングを持たないユーザーの動作は変わらず、明示的な log_config も引き続き優先されます。',
        'ハンドラーの数ではなく hasHandlers() を使い、親ロガーから継承されたハンドラーも尊重します。',
        'runtimeClassName は schedulerName（kserve/kserve#5073）と同じマージ方式を採用し、既存コードとの一貫性とレビューのしやすさを優先しました。任意フィールドのため、既存の ServingRuntime には影響しません。',
        'E2E テストとドキュメントの更新は今後の課題とし、PR には含めていません。',
      ],
      outcomes: [
        'ロギングの修正（kserve/kserve#4687）は 2026 年 3 月にアップストリームへマージされました。ユーザーのハンドラーの保持、未設定時の既定適用、明示的な設定による上書きの 3 つのユニットテストを追加しています。',
        'runtimeClassName 対応（kserve/kserve#5198）では、フィールドのマージと上書きのユニットテストを追加し、runtimeClassName: nvidia の ServingRuntime をローカルで作成して、生成された PodSpec に反映されることを確認しました。',
      ],
      contributions: {
        logging: 'ロギング設定の修正',
        runtimeClassName: 'runtimeClassName 対応',
      },
      diagram: {
        caption: '各変更が効く場所。kserve/kserve#4687 と kserve/kserve#5198 のコード変更をもとに作成。',
        steps: {
          logging: [
            'log_config なしで呼び出される',
            '新しいチェック：kserve ロガーに、ユーザーが設定したハンドラー（継承分を含む）があるか',
            'ハンドラーがない場合のみ KServe の既定設定を適用し、ある場合はそのまま戻ってユーザーのロギングを維持する',
          ],
          runtimeClassName: [
            'ServingRuntimePodSpec に追加した任意フィールド（例：nvidia）',
            'InferenceService コントローラーが ServingRuntime と predictor の PodSpec をマージする際にこのフィールドも引き継ぐ',
            'マージ後の PodSpec はその RuntimeClass を使い、predictor 側に指定があればそちらが優先される。WorkerSpec はインライン埋め込みで同じフィールドを持つ',
          ],
        },
      },
    },
  },
  contact: {
    page: {
      heroTitle: 'Chien-Hsun Chang',
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
      email: 'メールアドレス',
      emailPlaceholder: '返信できるようにメールアドレスを入力してください！',
      message: '内容',
      messagePlaceholder: 'ご用件やご連絡内容をお知らせください！',
      send: 'メール内容をプレビュー',
      helper: 'このフォームはメールを作成します。送信はメールアプリで行ってください。',
      subjectPrefix: '{name} からの連絡メッセージ',
      bodyTemplate: '名前：{name}\nメール：{email}\n\nメッセージ：\n{message}',
      mailOpened: 'メールアプリを開こうとしました。起動を確認し、メールを送信してください。',
      emailModal: {
        openMail: 'メールアプリを開く',
        title: 'メール内容',
        desc: 'メールアプリが開かない場合は、下の内容をコピーして送信してください。',
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
