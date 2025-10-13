document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.site-navbar');
  const btn = document.querySelector('.navbar-toggle');

  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }
});

