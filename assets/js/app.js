// Common app functions for GreenBite site

const tips = [
  "Swap one snack for fruit today.",
  "Try 5 minutes of deep breathing now.",
  "Add one extra serving of veg to your meals.",
  "Take a brisk 10-minute walk after lunch.",
  "Drink an extra glass of water today.",
  "Try a protein-rich breakfast for energy.",
  "Stretch for 5 minutes when you wake up."
];

function setHealthTip() {
  const d = new Date();
  const idx = d.getDate() % tips.length;
  const el = document.getElementById('health-tip');
  if (el) el.textContent = tips[idx];
}

let heroImages = [
  'assets/images/full-body/burpee-1.jpg',
  'assets/images/full-body/burpee.jpg'
];
let heroIdx = 0;

function rotateHero() {
  const img = document.getElementById('hero-img');
  if (!img) return;
  heroIdx = (heroIdx + 1) % heroImages.length;
  img.src = heroImages[heroIdx];
}

setInterval(rotateHero, 4500);
setHealthTip();

function openRecipeModal(html) {
  const modal = document.getElementById('recipe-modal');
  const body = document.getElementById('modal-body');
  if (modal && body) {
    body.innerHTML = html;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeRecipeModal() {
  const modal = document.getElementById('recipe-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function animateValue(el, start, end, duration = 1200) {
  if (!el) return;
  const range = end - start;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.round(start + range * progress);
    if (progress < 1) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

function toggleAns(btn) {
  const ans = btn.nextElementSibling;
  if (ans) ans.classList.toggle('hidden');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeRecipeModal();
  }
});
