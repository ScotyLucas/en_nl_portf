document.addEventListener("DOMContentLoaded", () => {
    const introBox = document.querySelector(".intro");

    introBox.addEventListener("mousemove", (e) => {
        const rect = introBox.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const rotateX = y * 20; // Fel-le döntés
        const rotateY = -x * 20; // Jobbra-balra döntés

        introBox.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    introBox.addEventListener("mouseleave", () => {
        introBox.style.transform = "perspective(500px) rotateX(0) rotateY(0)";
    });
});
