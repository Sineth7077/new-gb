document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".site-navbar");
  const toggleBtn = document.querySelector(".navbar-toggle");
  const linksContainer = document.querySelector(".navbar-links");

  if (!navbar || !toggleBtn || !linksContainer) return;

  // Toggle menu open/close
  toggleBtn.addEventListener("click", () => {
    linksContainer.classList.toggle("open");
    toggleBtn.classList.toggle("active");
    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !expanded);
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && linksContainer.classList.contains("open")) {
      linksContainer.classList.remove("open");
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", false);
    }
  });

  // Close menu when clicking a link (for mobile)
  document.querySelectorAll(".navbar-link").forEach(link => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("open");
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", false);
    });
  });
});


