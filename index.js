const crew = document.getElementById("crew")
const btn = document.getElementById("btn")
const counter=document.getElementById("counter")
const sleighbells =new Audio("http://www.freesoundslibrary.com/wp-content/uploads/2019/11/sleigh-bells-ringing-sound-effect.mp3")
let interval
// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.
btn.addEventListener("click",start)

function start() {
    btn.disabled = true
    btn.style.display = 'none'
    crew.classList.remove("slide-out-elliptic-top-bck")
    interval = setInterval(updateCounter, 1000)
    counter.innerText = 5
    sleighbells.pause();
    sleighbells.currentTime = 0;
}

function updateCounter() {
    if (counter.innerText > 0)
        counter.innerText -= 1
    else {
        launch()
        clearInterval(interval)
        interval = null
        counter.innerText = ''
        btn.disabled = false
        btn.style.display = 'block'
        sleighbells.play()
    }
}

function launch() {
    crew.classList.toggle("slide-out-elliptic-top-bck")
}
