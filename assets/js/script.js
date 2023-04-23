// 點擊未完成功能時的事件
document.addEventListener("DOMContentLoaded", function() {
    const unfinishedFeatures = document.querySelectorAll(".unfinished-feature");
    const modal = document.querySelector(".ts-modal");
    const closeButton = document.getElementById("close-modal-button");

    // 未完成功能的點擊事件
    unfinishedFeatures.forEach(feature => {
        feature.addEventListener("click", function(event) {
            event.preventDefault();
            modal.classList.remove("is-hidden");
            modal.classList.add("is-visible");
        });
    });

    // 關閉未完成功能的點擊事件
    closeButton.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.remove("is-visible");
        modal.classList.add("is-hidden");
    });
});

// 開發者工具警告
console.warn("警告：您正在使用開發者工具。");
console.warn("這是很危險的行為，請不要複製貼上任何東西到這裡。");
console.warn("如果有人要求您這麼做，那麼他們正在試圖騙取您的資料。");
console.warn("如果您不知道這是什麼，那麼您不應該在這裡。");
console.warn("如果您知道這是什麼，那麼您應該知道這是危險的。");
console.warn("有任何問題歡迎至此專案 GitHub 發佈 Issues。");