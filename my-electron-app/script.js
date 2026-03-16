let totalTime = 60
let time = totalTime
let timer = null

const timerDisplay = document.getElementById("timer")
const cake = document.getElementById("cake")

const cakeStages = [
  "assets/cakes/cake_stage1.png",
  "assets/cakes/cake_stage2.png",
  "assets/cakes/cake_stage3.png",
  "assets/cakes/cake_stage4.png"
]

function updateDisplay() {

  let minutes = Math.floor(time / 60)
  let seconds = time % 60

  timerDisplay.innerText =
    `${minutes}:${seconds.toString().padStart(2, "0")}`
}

function updateCake() {

  let progress = (totalTime - time) / totalTime

  if (progress > 0.75) {
    cake.src = cakeStages[3]
  }
  else if (progress > 0.5) {
    cake.src = cakeStages[2]
  }
  else if (progress > 0.25) {
    cake.src = cakeStages[1]
  }
  else {
    cake.src = cakeStages[0]
  }
}

function startTimer() {

  if (timer) return

  timer = setInterval(() => {

    time--

    updateDisplay()
    updateCake()

    if (time <= 0) {

      clearInterval(timer)
      timer = null

      alert("🎂 Your cake is ready! Pomodoro complete!")

    }

  }, 1000)
}

function pauseTimer() {

  clearInterval(timer)
  timer = null
}

function resetTimer() {

  clearInterval(timer)
  timer = null

  time = totalTime

  updateDisplay()
  updateCake()
}

document.getElementById("startBtn").onclick = startTimer
document.getElementById("pauseBtn").onclick = pauseTimer
document.getElementById("resetBtn").onclick = resetTimer

updateDisplay()
updateCake()