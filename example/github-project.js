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