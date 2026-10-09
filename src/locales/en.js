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
      introduction: "Currently a graduate student, I like to create small projects in my free time, most of which are open-source repos. Feel free to exchange ideas. ヾ(*´∀ ˋ*)ﾉ",
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
      learningFocus: "My learning focus involves software-hardware integration, full-stack development, and artificial intelligence. If you'd like to know more about me, feel free to visit {about} or {projects}.",
      links: {
        ccu: 'National Chung Cheng University',
        cs: 'Department of Computer Science and Engineering',
        about: 'About Me',
        projects: 'Projects',
      },
      codeRyo: {
        header: 'CodeRyo Studio',
        description: `Together with a few like-minded friends, we established the CodeRyo team. We are dedicated to server services and intelligent financial transactions. Our slogan, 
        "Making the future more than just the future," reflects our aspiration to contribute to the information field and the open-source community while enhancing our own capabilities.`,
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
        minxiongHydroCast: { description: 'Hydrological forecasting for Minxiong.' },
        bybitPredict: { description: 'Predict cryptocurrency trends with Python and the Bybit API.' },
        concentration: { description: 'A Hololive-themed concentration card game.' },
        myWebsite: { description: 'Source code for this personal website.' },
      },
      header: 'Featured Projects',
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
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      other: 'Other',
      email: 'Email Address',
      emailPlaceholder: 'Please enter your email address so I can reply to you!',
      message: 'Message',
      messagePlaceholder: 'Let me know what you want to say or contact me about!',
      send: 'Send',
      sending: 'Sending...',
      subjectPrefix: 'Contact message from {name}',
      bodyTemplate: 'Name: {name}\nGender: {gender}\nEmail: {email}\n\nMessage:\n{message}',
      mailOpened: 'Mail app opened, please confirm sending!',
      mailNotOpened: 'The mail app may not have opened correctly.\n\nClick OK to view the backup solution, or Cancel to keep the form content.',
      sendFail: 'Send failed: {msg}\n\nPlease send an email directly to kageryo@coderyo.com or use another contact method.',
      emailModal: {
        openMail: 'Open Mail App',
        title: 'Email Content',
        desc: 'Due to environment limitations, the mail app cannot be opened directly. Please copy the following content and send the email manually:',
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
