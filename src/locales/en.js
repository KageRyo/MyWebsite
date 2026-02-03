export default {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
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
      intro: `Yes, that's me, a developer from Taiwan, currently studying at 
      <a href='https://www.ccu.edu.tw/' class='ts-text is-external-link' target='_blank' rel='noopener noreferrer'>National Chung Cheng University</a> in the 
      <a href='https://cs.ccu.edu.tw/' class='ts-text is-external-link' target='_blank' rel='noopener noreferrer'>Department of Computer Science and Technology</a>.`,
      learningFocus: `My learning focus involves software-hardware integration, full-stack development, and artificial intelligence. If you'd like to know more about me, feel free to visit 
      <router-link to='/about' class='item'>About Me</router-link> or 
      <router-link to='/projects' class='item'>Projects</router-link>.`,
      waterMirror: {
        header: 'WaterMirror 水之鏡',
        description: `This is a collaborative research project developed with my university friends. It is an intelligent water quality analysis and evaluation system based on the 
        <a href='https://scikit-learn.org/' class='ts-text is-external-link' target='_blank' rel='noopener noreferrer'>Scikit-learn</a> framework. The system analyzes specific water quality experimental data and achieves evaluation and early warning through artificial intelligence and machine learning.`,
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
        gender: 'Gender',
        male: 'Male',
        age: 'Age',
        education: 'Education',
        educationDetail: 'National Chung Cheng University, Institute of Computer Science and Information Technology, 1st Year',
        motto: 'Always do my best to help others in my professional field, facing every challenge in life with dedication and perseverance.',
      },
    },
    certificates: {
      header: 'Certificates',
      table: {
        index: '#',
        year: 'Year',
        name: 'Name',
        level: 'Level',
        number: 'Number',
      },
      count: 'Total: {count}',
    },
    resume: {
      education: {
        header: 'Education',
        gradSchool: {
          period: '2025~',
          school: 'National Chung Cheng University, Institute of Computer Science and Information Technology / Master',
        },
        college: {
          period: '2021~2024',
          school: 'National Taichung University of Science and Technology, Department of Intelligent Production Engineering / Bachelor',
        },
      },
      experience: {
        header: 'Work Experience',
        paia: {
          period: '2024~2025',
          company: 'PAIA-Tech Co., Ltd. / Backend Software Engineer',
          platform: 'Playful AI Arena',
        },
        codingApe: {
          period: '2023~2025',
          company: 'Coding APE Programming School / Lecturer',
          corp: 'CODINGAPE CO., LTD.',
        },
        kaohsiung: {
          period: '2018~2021',
          company: 'Kaohsiung Information Training Association / Teaching Assistant',
        },
      },
    },
  },
  projects: {
    featured: {
      header: 'Featured Projects',
    },
    github: {
      header: 'My Open Source Projects on GitHub',
      loading: 'Loading GitHub projects for {tab}...',
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
      heroSubtitle: 'Developer, Programmer, and Student@TAIWAN.',
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
