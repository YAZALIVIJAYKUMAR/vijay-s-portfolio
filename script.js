document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".box");
    let isDragging = false;
    let startX, startY;
    let rotateX = 15, rotateY = 15;

    box.addEventListener("mousedown", function (e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            rotateY += deltaX * 0.5;
            rotateX -= deltaY * 0.5;
            box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            startX = e.clientX;
            startY = e.clientY;
        }
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });

    // Touch support for mobile devices
    box.addEventListener("touchstart", function (e) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    document.addEventListener("touchmove", function (e) {
        if (isDragging) {
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;
            rotateY += deltaX * 0.5;
            rotateX -= deltaY * 0.5;
            box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
    });

    document.addEventListener("touchend", function () {
        isDragging = false;
    });
});
