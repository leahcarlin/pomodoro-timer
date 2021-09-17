const infoEl = document.getElementById("info-display");
const timerEl = document.getElementById("time-display");
const workBtn = document.getElementById("work-btn");
const shortBreakBtn = document.getElementById("short-break-btn");
const longBreakBtn = document.getElementById("long-break-btn");
const messageEl = document.getElementById("message-display");

const work = 25;
const shortBreak = 5;
const longBreak = 15;

function displayZeroTime() {
  timerEl.innerHTML = `0:00`
}

function updateTimer(time) {
  let start = setInterval(function() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (time > 0) {
      if (seconds < 10) {
        seconds = "0" + seconds;
        } else {
          seconds = seconds;
        }
    } else {
      displayZeroTime();
      clearInterval(start);
      countdown = false;
    }

    timerEl.innerHTML = `${minutes}:${seconds}`;
    time--;
  } , 1000)
}

workBtn.addEventListener("click", function(){
  console.log("Work button clicked");
  if (countdown === false){
    countdown = true;
    updateTimer(25*60);
    infoEl.innerHTML = "Time to Work!"
  } else {
    messageEl.innerHTML = "Countdown already in progress"
  }
})

shortBreakBtn.addEventListener("click", function(){
  console.log("Short break button clicked");
  if (countdown === false){
    countdown = true;
    updateTimer(5*60);
    infoEl.innerHTML = "Time for a short break!"
  } else {
    messageEl.innerHTML = "Countdown already in progress"
  }
})

longBreakBtn.addEventListener("click", function(){
  console.log("Long break button clicked");
  if (countdown === false){
    countdown = true;
    updateTimer(15*60);
    infoEl.innerHTML = "Time for a long break!"
  } else {
    messageEl.innerHTML = "Countdown already in progress"
  }
})

//initilalize timer
displayZeroTime();
let countdown = false;
