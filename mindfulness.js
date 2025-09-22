// ==========================
// Mindfulness functionality
// ==========================
let breathInterval = null;
const breathEl = document.getElementById('breath');

document.getElementById('start-breath')?.addEventListener('click', () => {
  if (breathInterval) return;
  let phase = 0;
  breathEl.style.transition = 'transform 3s ease-in-out, opacity 3s';
  breathInterval = setInterval(() => {
    phase = (phase + 1) % 2;
    if (phase === 1) {
      breathEl.style.transform = 'scale(1.4)';
      breathEl.style.opacity = '0.9';
    } else {
      breathEl.style.transform = 'scale(1)';
      breathEl.style.opacity = '1';
    }
  }, 3000);
});

document.getElementById('stop-breath')?.addEventListener('click', () => {
  clearInterval(breathInterval);
  breathInterval = null;
  breathEl.style.transform = 'scale(1)';
});

let sessionTimer = null;
document.getElementById('start-mind')?.addEventListener('click', () => {
  const mins = Math.max(1, parseInt(document.getElementById('mind-min').value || 5));
  const target = Date.now() + mins * 60 * 1000;
  const display = document.getElementById('mind-timer');
  if (sessionTimer) clearInterval(sessionTimer);
  sessionTimer = setInterval(() => {
    const diff = Math.max(0, Math.round((target - Date.now()) / 1000));
    const mm = String(Math.floor(diff / 60)).padStart(2, '0');
    const ss = String(diff % 60).padStart(2, '0');
    display.textContent = `${mm}:${ss}`;
    if (diff <= 0) {
      clearInterval(sessionTimer);
      sessionTimer = null;
      display.textContent = '00:00';
      const key = 'gb_sessions_completed';
      let count = parseInt(localStorage.getItem(key) || '0');
      count++;
      localStorage.setItem(key, count);
      document.getElementById('mind-count').textContent = count;
      alert('Session completed!');
    }
  }, 250);
});

document.getElementById('stop-mind')?.addEventListener('click', () => {
  if (sessionTimer) {
    clearInterval(sessionTimer);
    sessionTimer = null;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('mind-count').textContent =
    localStorage.getItem('gb_sessions_completed') || '0';
});

// ==========================
// Mobile navbar toggle
// ==========================
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar-toggle');
  const linksContainer = document.querySelector('.navbar-links');

  toggle?.addEventListener('click', () => {
    linksContainer.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !linksContainer.contains(e.target)) {
      linksContainer.classList.remove('open');
    }
  });
});
