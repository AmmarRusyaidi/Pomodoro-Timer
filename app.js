const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let timeLeft = 100;
let interval;

const alarmSound = new Audio('audio.wav'); // path to your sound file

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        
        if (timeLeft === 0){
            clearInterval(interval);
            alarmSound.play();
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

const stopTimer = () => {
    clearInterval(interval);
}

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}



start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);