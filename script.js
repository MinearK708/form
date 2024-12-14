// Menyederhanakan animasi salju
document.addEventListener("DOMContentLoaded", function() {
    const snowflakes = document.querySelectorAll('.snowflake');

    snowflakes.forEach(snowflake => {
        let startPos = Math.random() * window.innerWidth;
        let delay = Math.random() * 10; // Variasi waktu mulai

        snowflake.style.left = `${startPos}px`;
        snowflake.style.animationDelay = `${delay}s`;
    });
});
