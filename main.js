
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    const toggle = document.querySelector(".menu-toggle");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
});
