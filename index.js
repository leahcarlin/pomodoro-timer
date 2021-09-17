const infoEl = document.getElementById("info-display");
const timerEl = document.getElementById("time-display");
const workBtn = document.getElementById("work-btn");
const shortBreakBtn = document.getElementById("short-break-btn");
const longBreakBtn = document.getElementById("long-break-btn");

const work = 25;
const shortBreak = 5;
const longBreak = 15;

function updateTimer(time) {
  let start = setInterval(function() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
      } else {
        seconds = seconds;
      }

    timerEl.innerHTML = `${minutes}:${seconds}`;
    time--;
  } , 1000)
}

workBtn.addEventListener("click", function(){
  console.log("Work button clicked");
  updateTimer(25*60);
  infoEl.innerHTML = "Time to Work!"
})

shortBreakBtn.addEventListener("click", function(){
  console.log("Short break button clicked");
  updateTimer(5*60);
  infoEl.innerHTML = "Time for a short break!"
})

longBreakBtn.addEventListener("click", function(){
  console.log("Long break button clicked");
  updateTimer(15*60);
  infoEl.innerHTML = "Time for a long break!"
})


