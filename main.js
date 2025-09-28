
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    const toggle = document.querySelector(".menu-toggle");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
});

<script>
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".site-navbar");
  const toggleBtn = document.querySelector(".navbar-toggle");

  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");

    // Update ARIA for accessibility
    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !expanded);
  });

  // Close menu when clicking a link (mobile)
  document.querySelectorAll(".navbar-link").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", false);
    });
  });
});
</script>
