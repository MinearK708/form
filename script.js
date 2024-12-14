document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const snowflake = document.createElement("span");
        snowflake.textContent = "❄";
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
        document.body.appendChild(snowflake);

        // Hapus salju setelah selesai
        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    }, 300); // Tambahkan salju setiap 300ms
});
