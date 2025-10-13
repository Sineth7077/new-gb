AOS.init();
feather.replace();

// ==========================
// Session Timer + Breathing Bubble
// ==========================
let timer, minutes = 0, seconds = 0, isRunning = false, sessionsCompleted = 0;
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const sessionsDisplay = document.getElementById('sessions');

const breathBubble = document.getElementById('breath');
const breathText = document.getElementById('breathing-text');
let breathingInterval = null;
let inhale = true;

startBtn.addEventListener('click', () => {
  if (isRunning) return;
  isRunning = true;
  startBtn.disabled = true;
  stopBtn.disabled = false;

  // Start Timer
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) { minutes++; seconds = 0; }
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);

  // Start breathing animation
  breathText.textContent = "Inhale";
  breathingInterval = setInterval(() => {
    if (inhale) {
      breathBubble.style.transform = "scale(1.4)";
      breathText.textContent = "Exhale";
      breathBubble.style.boxShadow = "0 0 30px 10px rgba(34, 197, 94, 0.5)";
    } else {
      breathBubble.style.transform = "scale(1)";
      breathText.textContent = "Inhale";
      breathBubble.style.boxShadow = "0 0 15px 5px rgba(34, 197, 94, 0.3)";
    }
    inhale = !inhale;
  }, 4000);
});

stopBtn.addEventListener('click', () => {
  if (!isRunning) return;
  clearInterval(timer);
  clearInterval(breathingInterval);

  // Reset visuals
  breathBubble.style.transform = "scale(1)";
  breathText.textContent = "Ready";
  breathBubble.style.boxShadow = "none";

  isRunning = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;

  if (minutes > 0 || seconds > 30) {
    sessionsCompleted++;
    sessionsDisplay.textContent = sessionsCompleted;
  }

  minutes = 0;
  seconds = 0;
  timerDisplay.textContent = '00:00';
});
