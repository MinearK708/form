document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("span");
        snowflake.textContent = "❄";
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
        snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
        document.body.appendChild(snowflake);
    }
});
