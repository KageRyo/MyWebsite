document.addEventListener("DOMContentLoaded", function() {
    const unfinishedFeatures = document.querySelectorAll(".unfinished-feature");
    const modal = document.querySelector(".ts-modal");
    const closeButton = document.getElementById("close-modal-button");

    unfinishedFeatures.forEach(feature => {
        feature.addEventListener("click", function(event) {
            event.preventDefault();
            modal.classList.remove("is-hidden");
            modal.classList.add("is-visible");
        });
    });

    closeButton.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.remove("is-visible");
        modal.classList.add("is-hidden");
    });
});
