// 初始化功能
document.addEventListener("DOMContentLoaded", () => {
    initAppDrawer();
});

// 處理邊緣抽屜的開關
function initAppDrawer() {
    const appDrawer = document.querySelector(".ts-app-drawer#more");
    const appDrawerOpenButton = document.getElementById("app-drawer-open-button");
    const appDrawerCloseButton = document.getElementById("app-drawer-close-button");

    appDrawerOpenButton.addEventListener("click", event => {
        event.preventDefault();
        appDrawer.classList.remove("is-hidden");
        appDrawer.classList.add("is-visible");
    });

    appDrawerCloseButton.addEventListener("click", event => {
        event.preventDefault();
        appDrawer.classList.remove("is-visible");
        appDrawer.classList.add("is-hidden");
    });
}
