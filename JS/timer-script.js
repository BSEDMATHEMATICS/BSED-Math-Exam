// document.addEventListener("DOMContentLoaded", () => {
//   const timerDisplay = document.getElementById("timer-display");
//   const startButton = document.getElementById("start-button");

//   let timer;
//   let timeLeft = 30;

//   function updateTimerDisplay(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     timerDisplay.textContent = `${String(remainingSeconds).padStart(2, "0")}`;
//   }

//   function startTimer() {
//     if (timer) {
//       clearInterval(timer);
//     }

//     timeLeft = 30;
//     updateTimerDisplay(timeLeft);

//     timer = setInterval(() => {
//       timeLeft--;

//       if (timeLeft <= 0) {
//         clearInterval(timer);
//         timerEnded();
//       } else {
//         updateTimerDisplay(timeLeft);
//       }
//     }, 1000);
//   }

//   function timerEnded() {
//     alert("Time is up!");
//   }

//   startButton.addEventListener("click", startTimer);

//   updateTimerDisplay(timeLeft);
// });
