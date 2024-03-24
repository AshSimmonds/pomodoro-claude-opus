let isRunning = false;
let timer;
let remainingTime = {
    total: 1500, // 25 minutes
    minutes: 25,
    seconds: 0,
};

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(function() {
        if (remainingTime.total === 0) {
            resetTimer();
            alert('Time for a break!');
            return;
        }
        remainingTime.total--;
        remainingTime.minutes = parseInt(remainingTime.total / 60, 10);
        remainingTime.seconds = parseInt(remainingTime.total % 60, 10);
        
        document.getElementById('timer').textContent = `${remainingTime.minutes}:${remainingTime.seconds < 10 ? '0' : ''}${remainingTime.seconds}`;
    }, 1000);
}

function pauseTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    remainingTime = {
        total: 1500,
        minutes: 25,
        seconds: 0,
    };
    document.getElementById('timer').textContent = '25:00';
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
