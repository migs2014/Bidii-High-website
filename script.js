document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slider img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let index = 0;

    function showImage(idx) {
        images.forEach(img => img.style.display = "none");
        images[idx].style.display = "block";
    }

    nextButton.addEventListener("click", () => {
        index = (index + 1) % images.length;
        showImage(index);
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });

    // Auto-slide every 3 seconds
    setInterval(() => {
        index = (index + 1) % images.length;
        showImage(index);
    }, 3000);
});