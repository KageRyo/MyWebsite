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
      const projectsContainer = document.getElementById('projects');
      const totalRepos = document.getElementById('total-repos');

      if (projectsContainer && totalRepos) {
        let index = 1;
        data.forEach((repo) => {
          const repoName = repo.name;
          const repoUrl = repo.html_url;
          const repoDescription = repo.description || '無描述';

          const tableRow = document.createElement('tr');

          const indexCell = document.createElement('td');
          indexCell.innerText = index;
          tableRow.appendChild(indexCell);

          const nameCell = document.createElement('td');
          nameCell.innerText = repoName;
          tableRow.appendChild(nameCell);

          const urlCell = document.createElement('td');
          const urlLink = document.createElement('a');
          urlLink.href = repoUrl;
          urlLink.target = '_blank';
          urlLink.innerText = repoUrl;
          urlCell.appendChild(urlLink);
          tableRow.appendChild(urlCell);

          const descriptionCell = document.createElement('td');
          descriptionCell.innerText = repoDescription;
          tableRow.appendChild(descriptionCell);

          projectsContainer.appendChild(tableRow);
          index++;
        });
        totalRepos.textContent = `統計筆數：${data.length}`;
      }
    });
});