// 點擊未完成功能時的事件
document.addEventListener("DOMContentLoaded", () => {
  const unfinishedFeatures = document.querySelectorAll(".unfinished-feature");
  const modal = document.querySelector(".ts-modal");
  const closeButton = document.getElementById("close-modal-button");

  // 未完成功能的點擊事件
  unfinishedFeatures.forEach(feature => {
    feature.addEventListener("click", event => {
      event.preventDefault();
      modal.classList.remove("is-hidden");
      modal.classList.add("is-visible");
    });
  });

  // 關閉未完成功能的點擊事件
  closeButton.addEventListener("click", event => {
    event.preventDefault();
    modal.classList.remove("is-visible");
    modal.classList.add("is-hidden");
  });
});

// 自 GitHub 抓取專案資料的程式
document.addEventListener('DOMContentLoaded', function () {
  const githubUsername = 'KageRyo';
  const apiUrl = 'https://api.github.com/users/' + githubUsername + '/repos';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const projectsContainer = document.querySelector('.projects');
      data.forEach((repo) => {
        const repoName = repo.name;
        const repoUrl = repo.html_url;
        const repoDescription = repo.description || '無描述';
        const projectCard = `
                  <div class="ts-card">
                      <div class="content">
                          <div class="header">
                              <a href="${repoUrl}" target="_blank">${repoName}</a>
                          </div>
                          <div class="description">
                              ${repoDescription}
                          </div>
                      </div>
                  </div>`;
        projectsContainer.insertAdjacentHTML('beforeend', projectCard);
      });
    });
});