// ==== SCREEN TIME TRACKER ====
let secondsOnline = 0;
const timeCount = document.getElementById("timeCount");

setInterval(() => {
  secondsOnline++;
  const mins = String(Math.floor(secondsOnline / 60)).padStart(2, "0");
  const secs = String(secondsOnline % 60).padStart(2, "0");
  timeCount.textContent = `${mins}:${secs}`;
}, 1000);

// ==== EXERCISE BUTTON ALERTS ====
document.querySelectorAll(".OMGLOL button").forEach(btn => {
  btn.addEventListener("click", () => {
    const exerciseName = btn.previousElementSibling.textContent;
    alert(`Starting ${exerciseName} exercise!`);
  });
});

// ==== MORE EXERCISES BUTTON ====
document.querySelector(".jaswitha button").addEventListener("click", () => {
  alert("Redirecting to more quizzes and exercises!");
});

// ==== TIMER PANEL FUNCTIONALITY ====
let timerInterval;
let totalSeconds = 0;
let mode = "stopwatch"; // default mode

const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startTimer");
const resetBtn = document.getElementById("resetTimer");
const alarmBtn = document.getElementById("alarmBtn");
const stopwatchBtn = document.getElementById("stopwatchBtn");

// Update timer display
function updateTimerDisplay() {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");
  timerDisplay.textContent = `${mins}:${secs}`;
}

// Start button
startBtn.addEventListener("click", () => {
  if (mode === "stopwatch") {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        totalSeconds++;
        updateTimerDisplay();
      }, 1000);
    }
  } else if (mode === "alarm") {
    const input = prompt("Set alarm in minutes:");
    const alarmTime = parseInt(input) * 60;
    if (isNaN(alarmTime) || alarmTime <= 0) {
      alert("Invalid time!");
      return;
    }
    totalSeconds = 0;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      totalSeconds++;
      updateTimerDisplay();
      if (totalSeconds >= alarmTime) {
        clearInterval(timerInterval);
        timerInterval = null;
        alert("⏰ Time's up!");
      }
    }, 1000);
  }
});

// Reset button
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 0;
  updateTimerDisplay();
});

// Switch to Alarm mode
alarmBtn.addEventListener("click", () => {
  mode = "alarm";
  alert("Alarm mode activated! Click Start to set your alarm.");
});

// Switch to Stopwatch mode
stopwatchBtn.addEventListener("click", () => {
  mode = "stopwatch";
  alert("Stopwatch mode activated!");
});
