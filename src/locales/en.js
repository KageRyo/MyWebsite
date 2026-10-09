export default {
  meta: {
    home: { title: 'KageRyo Developer - Home' },
    about: { title: 'KageRyo Developer - About' },
    projects: { title: 'KageRyo Developer - Projects' },
    contact: { title: 'KageRyo Developer - Contact' },
    notFound: { title: 'KageRyo Developer - Page Not Found' },
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  notFound: {
    message: 'The page you requested could not be found.',
    backHome: 'Back to Home',
  },
  home: {
    hero: {
      introduction: "Hi! I'm Chien-Hsun, a master's student in Computer Science and Information Engineering at National Chung Cheng University. I enjoy building small tools, contributing to open source, and working on backend platforms, AI systems, and MLOps. Explore my projects, and feel free to connect! ヾ(*´∀ ˋ*)ﾉ",
      academic: 'M.S. student at National Chung Cheng University · Expected Aug 2027',
      availability: 'Available for 2027 pre-employment programs and R&D Substitute Service',
      viewProjects: 'View Projects',
      downloadResume: 'Resume (PDF)',
      seeMore: 'See More',
    },
    quote: {
      main: "Life and coding both start with print(\"Hello World\");",
      cite: "A person's birth greets the world, and 'Hello World' gives us a new chapter.",
    },
    featuredPhotos: {
      ministry: {
        header: "Photo with Taiwan's Minister of Education, Pan Wen-Chung",
        description: 'Attended the 2023 International Invention Exhibition Gold Medal Award Student Reception Event.',
      },
      coscup: {
        header: 'COSCUP',
        description: "Speaker at COSCUP 2023's Lightning Talk.",
      },
    },
    infoCards: {
      intro: "Yes, that's me, a developer from Taiwan, currently studying at {ccu} in the {cs}.",
      learningFocus: 'My focus is backend and data services, Linux/Kubernetes platforms, ML inference, and digital-twin integration. See {about} and {projects} for practical examples.',
      links: {
        ccu: 'National Chung Cheng University',
        cs: 'Department of Computer Science and Engineering',
        about: 'About Me',
        projects: 'Projects',
      },
    },
  },
  about: {
    personal: {
      basic: {
        male: 'Male',
        details: 'Gender: {gender} · Age: {age}',
        education: 'Education',
        educationDetail: "National Chung Cheng University, Institute of Computer Science and Information Engineering, Master's Student",
        motto: 'Always do my best to help others in my professional field, facing every challenge in life with dedication and perseverance.',
      },
      summary: "I'm a master's student in Computer Science and Information Engineering at National Chung Cheng University, focusing on backend and platform engineering, AI systems, and MLOps. I have built backend services, ML inference workflows, Kubernetes deployments, CI/CD pipelines, and Linux infrastructure, contributed to CNCF KServe, and worked on digital twin, computer vision, and federated learning projects.",
      resumeDownload: 'Download Resume (PDF)',
    },
    certificates: {
      header: 'Certificates',
      table: {
        index: '#',
        year: 'Year',
        name: 'Name',
        level: 'Level',
      },
      count: 'Total: {count}',
    },
    resume: {
      education: {
        header: 'Education',
        items: {
          ccu: {
            period: 'Aug 2025 – Aug 2027 (expected)',
            school: 'National Chung Cheng University / M.S. in Computer Science and Information Engineering',
          },
          nutc: {
            period: 'Sep 2021 – Jun 2025',
            school: 'National Taichung University of Science and Technology / B.Eng. in Intelligent Production Engineering',
          },
        },
      },
      experience: {
        header: 'Work Experience',
        items: {
          ccuResearch: {
            period: 'Aug 2025 – Present',
            company: 'National Chung Cheng University / Research Assistant / Project Lead',
            highlights: [
              'Lead a 4-member international team building a flood disaster digital twin platform with FastAPI, PostgreSQL/PostGIS, Redis, and Docker.',
              'Build APIs, spatial data pipelines, and ML inference workflows connecting simulation, GIS, decision support, and visualization.',
              'Set up CI/CD, automated deployment, and validation workflows with GitHub Actions.',
            ],
          },
          ccuSysadmin: {
            period: 'Aug 2025 – Present',
            company: 'National Chung Cheng University / System Administrator',
            highlights: [
              'Maintain Linux servers, GPU workstations, Docker environments, networking, storage, SSH access, and shared research infrastructure.',
            ],
          },
          paia: {
            period: 'Jul 2024 – Jun 2025',
            company: 'PAIA Technology Co., Ltd. / Backend Software Engineer Intern',
            platform: 'Playful AI Arena',
            highlights: [
              'Developed backend services with Python, Django Ninja, Pydantic, PostgreSQL, and MongoDB.',
              'Built REST APIs, validation logic, database models, logging, and error handling.',
              'Wrote unit and integration tests and participated in code review and Agile/Scrum development.',
            ],
          },
          codingApe: {
            period: 'Mar 2023 – Jun 2025',
            company: 'Coding APE Programming School / Programming Instructor',
            corp: 'CODINGAPE CO., LTD.',
          },
        },
      },
      skills: {
        header: 'Skills',
        groups: {
          languages: 'Languages',
          backend: 'Backend & Data',
          aiml: 'AI / ML',
          platform: 'Platform / MLOps',
          digitalIc: 'Digital IC (coursework)',
        },
      },
    },
  },
  projects: {
    featured: {
      items: {
        kserve: {
          title: 'KServe (CNCF)',
          category: 'Open Source',
          role: 'Open Source Contributor',
          period: 'Sep 2025 – Present',
          summary: 'Fixed a Python logging issue in KServe; the patch was merged upstream. Submitted runtimeClassName support for ServingRuntimePodSpec and WorkerSpec, including tests and CRD/OpenAPI updates.',
        },
        tagTwin: {
          title: 'TAG-Twin Flood Disaster Digital Twin Platform',
          category: 'Backend & Digital Twin',
          role: 'Project Lead',
          period: 'Aug 2025 – Present',
          summary: 'Built the core backend and data platform integrating GIS data, flood simulation, risk data, evacuation routing, and Unreal Engine visualization, along with data and ML inference pipelines, APIs, and WebSocket interfaces connecting simulation, decision, and visualization modules.',
        },
        federatedAqi: {
          title: 'Cross-Nation Federated AQI Platform',
          category: 'Federated Learning & MLOps',
          role: 'System Planning & Integration',
          period: 'Aug – Sep 2026',
          summary: 'Led system planning and cross-team integration for the CCU × UBM federated AQI platform, defining interfaces and handoff contracts across dataset preparation, Flower training, deployment, inference, and monitoring. Integrated the federated global model with the UBM AI Deployment Platform, including AQI inference, Grafana monitoring, end-to-end testing, and final deployment.',
        },
        environmentalEnforcement: {
          title: 'AI Environmental Enforcement System',
          category: 'Computer Vision',
          period: 'Sep 2025 – Present',
          summary: 'Built a CCTV event analysis pipeline with D-FINE, ByteTrack, pose analysis, VLM, and OCR. Separated GPU inference from post-processing to avoid repeated inference and deployed the system for field use.',
        },
      },
      status: {
        merged: 'Merged',
        open: 'Open',
      },
      privateSource: 'Source code not public',
      header: 'Featured Projects',
    },
    tools: {
      header: 'Open-Source Data Engineering & Governance Tools',
      description: 'Independent open-source tools extracted from recurring problems in preparing multi-source research data.',
      items: {
        releaseGuard: 'Validates dataset structure, uniqueness, cross-table relationships, temporal order, and file integrity from a config file, with GitHub Actions support and Linux, Windows, and macOS binaries.',
        gridForge: 'Builds fixed-spec spatial grids that align point, polygon, and raster data, handling coordinate system conversion, grid IDs, merging, and validation. Published on PyPI.',
        lineageGuard: 'A local CLI for validating artifact provenance, identity, and lineage.',
        evidenceMatrix: 'Deterministic entity-by-source coverage audits for multi-source datasets.',
        entityLinkage: 'Links external records to a canonical set of entities, keeping unmatched and ambiguous cases explicit instead of guessing.',
      },
    },
    github: {
      header: 'My Open Source Projects on GitHub',
      loading: 'Loading GitHub projects for {tab}...',
      noProjects: 'No public repositories to display.',
      apiErrorTitle: 'GitHub API Maintenance',
      apiErrorDesc: 'Due to GitHub API rate limits, this feature is temporarily unavailable.\nWe are working to fix this issue. Sorry for the inconvenience!',
      visitDirectly: 'You can still visit my GitHub profile to see all projects:',
      visitDirectlyShort: 'You can still visit my GitHub profile:',
      loadingBtn: 'Loading...',
      retryBtn: 'Retry',
      table: {
        index: '#',
        name: 'Name',
        url: 'URL',
        desc: 'Description',
        noDesc: 'No description',
        count: 'Total: {count}',
      },
    },
  },
  contact: {
    page: {
      heroTitle: 'Chien-Hsun Chang',
      heroSubtitle: 'Developer, Programmer, and Student in TAIWAN.',
    },
    info: {
      header: 'Contact Information',
      discord: 'Discord',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    form: {
      header: 'Contact Form',
      name: 'Name',
      namePlaceholder: 'Let me know how to address you!',
      email: 'Email Address',
      emailPlaceholder: 'Please enter your email address so I can reply to you!',
      message: 'Message',
      messagePlaceholder: 'Let me know what you want to say or contact me about!',
      send: 'Preview Email',
      helper: 'This form prepares an email; please send it using your email app.',
      subjectPrefix: 'Contact message from {name}',
      bodyTemplate: 'Name: {name}\nEmail: {email}\n\nMessage:\n{message}',
      mailOpened: 'Tried to open your email app. Please confirm it opened and send the email yourself.',
      emailModal: {
        openMail: 'Open Email App',
        title: 'Email Content',
        desc: 'If your email app did not open, copy the message below and send it manually.',
        recipient: 'Recipient',
        subject: 'Subject',
        body: 'Body',
        copyAll: 'Copy All',
        close: 'Close',
        copySuccess: 'Email content copied to clipboard! You can paste it into your mail app.',
        copyFail: 'Copy failed, please manually select and copy the content above.',
      },
    },
  },
  ui: {
    navigation: {
      primary: 'Primary navigation',
    },
    language: {
      label: 'Language',
    },
    skipToMain: 'Skip to main content',
    theme: {
      light: 'Switch to light mode',
      dark: 'Switch to dark mode',
    },
    drawer: {
      title: 'Navigation',
      close: 'Close menu',
    },
  },
};
