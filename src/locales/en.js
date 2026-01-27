export default {
  home: 'Home',
  about: 'About',
  projects: 'Projects',
  contact: 'Contact',
  language: 'English',
  hero: {
    introduction: "Currently a graduate student, I like to create small projects in my free time, most of which are open-source repos. Feel free to exchange ideas. ヾ(*´∀ ˋ*)ﾉ",
    seeMore: "See More",
  },
  quote: {
    main: "Life and coding both start with print(\"Hello World\");",
    cite: "A person's birth greets the world, and 'Hello World' gives us a new chapter.",
  },
  featuredPhotos: {
    ministryHeader: "Photo with Taiwan's Minister of Education, Pan Wen-Chung",
    ministryDescription: "Attended the 2023 International Invention Exhibition Gold Medal Award Student Reception Event.",
    coscupHeader: "COSCUP",
    coscupDescription: "Speaker at COSCUP 2023's Lightning Talk.",
  },
  infoCards: {
    intro: `Yes, that's me, a developer from Taiwan, currently studying at 
      <a href='https://www.ccu.edu.tw/' class='ts-text is-external-link' target='_blank' rel='noopener noreferrer'>National Chung Cheng University</a> in the 
      <a href='https://cs.ccu.edu.tw/' class='ts-text is-external-link' target='_blank' rel='noopener noreferrer'>Department of Computer Science</a>.`,
    learningFocus: `My learning focus involves software-hardware integration, full-stack development, and artificial intelligence. If you'd like to know more about me, feel free to visit 
      <router-link to='/about' class='item'>About Me</router-link> or 
      <router-link to='/projects' class='item'>Projects</router-link>.`,
    waterMirror: {
      description: `This is a collaborative research project developed with my university friends. It is an intelligent water quality analysis and evaluation system based on the 
        <a href='https://scikit-learn.org/' class='ts-text is-external-link' target='_blank' rel='noopener noreferrer'>Scikit-learn</a> framework. The system analyzes specific water quality experimental data and achieves evaluation and early warning through artificial intelligence and machine learning.`,
      header: "WaterMirror 水之鏡",
    },
    codeRyo: {
      header: "CodeRyo Studio",
      description: `Together with a few like-minded friends, we established the CodeRyo team. We are dedicated to server services and intelligent financial transactions. Our slogan, 
        "Making the future more than just the future," reflects our aspiration to contribute to the information field and the open-source community while enhancing our own capabilities.`,
    },
  },
};
