const timerEl = $('#timer');
let timeLeft = 25 * 60;
let timerInterval;


//to be shore everything load before running code : 
$(document).ready(()=>{
//define start timer function:
function startTimer() {
    if (timerInterval) {
        return;
    }
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft -= 1;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            playSound();
        }
    }, 1000);
}

//define update timer function:
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.text(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}


//define reset timer function :
function resetTimer() {
    timeLeft = 25 * 60;
    updateTimer();
    stopTimer();
}

//define customize timer function :
function customizeTimer() {
    const inputMinutes = $('#customTimeInput').val();
    if (inputMinutes && !isNaN(inputMinutes)) {
        const newTimeLeft = parseInt(inputMinutes) * 60;
        if (newTimeLeft > 0) {
            timeLeft = newTimeLeft;
            updateTimer() = newTimeLeft;
        } else {
            alert('Please enter a valid positive number for minutes.');
        }
    } else {
        alert('Please enter a valid number for minutes.');
    }
}

//define stop timer function:
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}


//define sound function:
function playSound() {
    const audio = new Audio('noti.wav');
    audio.play();
}

//call the functions :
$('#start').click(() => startTimer());
$('#reset').click(() => resetTimer());
$('#customize').click(() => customizeTimer());
$('#stopBtn').click(()=>stopTimer());
});