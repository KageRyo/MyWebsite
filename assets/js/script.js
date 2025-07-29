const THEME_KEY = 'theme';
const THEME_SOURCE_KEY = 'themeSource';

// 初始化功能
document.addEventListener("DOMContentLoaded", () => {
  modeToggle();
  detectSystemTheme();
  applySavedTheme();
  initUnfinishedFeatures();
  fetchProjects();
});

// 檢測系統主題偏好
function detectSystemTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (!savedTheme) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem(THEME_KEY, 'is-dark');
    } else {
      localStorage.setItem(THEME_KEY, 'is-light');
    }
    localStorage.setItem(THEME_SOURCE_KEY, 'system');
  }

  // 監聽系統主題變化
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      const themeSource = localStorage.getItem(THEME_SOURCE_KEY);
      if (themeSource === 'system') {
        const newTheme = e.matches ? 'is-dark' : 'is-light';
        localStorage.setItem(THEME_KEY, newTheme);
        applySavedTheme();
      }
    });
  }
}
// 處理黑白色系切換的事件
function modeToggle() {
  const toggleBtn = document.getElementById('mode-toggle');
  const tbtnClass = document.querySelector('.ts-icon');

  toggleBtn.addEventListener('click', () => {
    if (tbtnClass.classList.contains('is-sun-icon')) {
      localStorage.setItem(THEME_KEY, 'is-light');
    } else {
      localStorage.setItem(THEME_KEY, 'is-dark');
    }
    // Set theme source to manual when user manually toggles
    localStorage.setItem(THEME_SOURCE_KEY, 'manual');
    applySavedTheme();
  });
}

// 儲存黑白色系的設定
function applySavedTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const htmlClass = document.querySelector('html');
  const tbtnClass = document.querySelector('.ts-icon');

  if (savedTheme) {
    htmlClass.className = savedTheme;

    if (savedTheme === 'is-dark') {
      tbtnClass.classList.replace('is-moon-icon', 'is-sun-icon');
    } else {
      tbtnClass.classList.replace('is-sun-icon', 'is-moon-icon');
    }
  }
}

// 處理未完成功能的點擊事件
function initUnfinishedFeatures() {
  const unfinishedFeatures = document.querySelectorAll(".unfinished-feature");
  const modal = document.querySelector(".ts-modal");
  const closeButton = document.getElementById("close-modal-button");

  unfinishedFeatures.forEach(feature => {
    feature.addEventListener("click", event => {
      event.preventDefault();
      modal.classList.remove("is-hidden");
      modal.classList.add("is-visible");
    });
  });

  closeButton.addEventListener("click", event => {
    event.preventDefault();
    modal.classList.remove("is-visible");
    modal.classList.add("is-hidden");
  });
}

// 從 GitHub API 獲取專案資料
function fetchProjects() {
  // KageRyo
  const apiUrl_KageRyo = `https://api.github.com/users/KageRyo/repos`;

  fetch(apiUrl_KageRyo)
    .then((response) => response.json())
    .then((data) => {
      const projectsContainer = document.getElementById('projects-kageryo');
      const totalRepos = document.getElementById('total-repos-kageryo');

      if (projectsContainer && totalRepos) {
        let index = 1;
        data.forEach((repo) => {
          const { name, html_url, description = '無描述' } = repo;
          projectsContainer.appendChild(createProjectTableRow(index, name, html_url, description));
          index++;
        });
        totalRepos.textContent = `統計筆數：${data.length}`;
      }
    });
    // KageRyo's Lab
    apiUrl_Lab = `https://api.github.com/users/KageRyo-Lab/repos`;

    fetch(apiUrl_Lab)
      .then((response) => response.json())
      .then((data) => {
        const projectsContainer = document.getElementById('projects-lab');
        const totalRepos = document.getElementById('total-repos-lab');
  
        if (projectsContainer && totalRepos) {
          let index = 1;
          data.forEach((repo) => {
            const { name, html_url, description = '無描述' } = repo;
            projectsContainer.appendChild(createProjectTableRow(index, name, html_url, description));
            index++;
          });
          totalRepos.textContent = `統計筆數：${data.length}`;
        }
      });
    // CodeRyo
    const apiUrl_CodeRyo = `https://api.github.com/users/CodeRyoDeveloper/repos`;

    fetch(apiUrl_CodeRyo)
      .then((response) => response.json())
      .then((data) => {
        const projectsContainer = document.getElementById('projects-coderyo');
        const totalRepos = document.getElementById('total-repos-coderyo');
  
        if (projectsContainer && totalRepos) {
          let index = 1;
          data.forEach((repo) => {
            const { name, html_url, description = '無描述' } = repo;
            projectsContainer.appendChild(createProjectTableRow(index, name, html_url, description));
            index++;
          });
          totalRepos.textContent = `統計筆數：${data.length}`;
        }
      });
    // RotatingPotato 
    const apiUrl_Potato = `https://api.github.com/users/RotatingPotato/repos`;

    fetch(apiUrl_Potato)
      .then((response) => response.json())
      .then((data) => {
        const projectsContainer = document.getElementById('projects-potato');
        const totalRepos = document.getElementById('total-repos-potato');
  
        if (projectsContainer && totalRepos) {
          let index = 1;
          data.forEach((repo) => {
            const { name, html_url, description = '無描述' } = repo;
            projectsContainer.appendChild(createProjectTableRow(index, name, html_url, description));
            index++;
          });
          totalRepos.textContent = `統計筆數：${data.length}`;
        }
      });
}

// 創建專案表格行
function createProjectTableRow(index, name, url, description) {
  const tableRow = document.createElement('tr');

  const indexCell = document.createElement('td');
  indexCell.innerText = index;
  tableRow.appendChild(indexCell);

  const nameCell = document.createElement('td');
  nameCell.innerText = name;
  tableRow.appendChild(nameCell);

  const urlCell = document.createElement('td');
  const urlLink = document.createElement('a');
  urlLink.href = url;
  urlLink.target = '_blank';
  urlLink.innerText = url;
  urlCell.appendChild(urlLink);
  tableRow.appendChild(urlCell);

  const descriptionCell = document.createElement('td');
  descriptionCell.innerText = description;
  descriptionCell.classList.add('ts-text');
  descriptionCell.classList.add('is-1-lines');
  descriptionCell.classList.add('mobile:u-hidden');
  tableRow.appendChild(descriptionCell);

  return tableRow;
}

// 檢測 email 欄位是否正確
function isValidEmail(email) {
  var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

// 檢測欄位是否有被填寫
function isNotEmpty(value) {
  return value.trim().length > 0;
}

// 聯絡表單功能的實作
function sendEmail() {
  var to = "kageryo@coderyo.com";
  var name = document.getElementById("name").value;
  var genderRadio = document.querySelector('input[name="gender"]:checked');
  var gender = genderRadio ? genderRadio.value : '';
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var emailValid = isValidEmail(email);
  var nameValid = isNotEmpty(name);
  var messageValid = isNotEmpty(message);

  if (!emailValid) {
    document.getElementById("email").parentNode.className = "ts-input is-underlined is-fluid is-negative";
  } else {
    document.getElementById("email").parentNode.className = "ts-input is-underlined is-fluid";
  }

  if (!nameValid) {
    document.getElementById("name").parentNode.className = "ts-input is-underlined is-fluid is-negative";
  } else {
    document.getElementById("name").parentNode.className = "ts-input is-underlined is-fluid";
  }

  if (!messageValid) {
    document.getElementById("message").parentNode.className = "ts-input is-underlined is-fluid is-negative";
  } else {
    document.getElementById("message").parentNode.className = "ts-input is-resizable is-underlined is-fluid";
  }

  if (!emailValid || !nameValid || !messageValid) {
    return;
  }

  var subject = "聯絡表單: " + name;
  var body = "姓名：" + name + "%0A";
  body += "性別：" + gender + "%0A";
  body += "電子郵件：" + email + "%0A%0A";
  body += "訊息：" + message;

  var mailTo = document.createElement("a");
  mailTo.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  mailTo.click();
}
