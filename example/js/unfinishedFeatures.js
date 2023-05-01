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