let remainingTime = document.querySelector('#remainingTime');
let countdownInput = document.querySelector('#countdown-input');
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let resetBtn = document.querySelector('#resetBtn');

let interval;
let counter;
let remainingSeconds = 0;

startBtn.addEventListener('click', () => {
    clearInterval(interval); // Cancella intervallo precedente
    if (countdownInput.value) {
        counter = countdownInput.value;
    } else if (remainingSeconds !== 0) {
        counter = remainingSeconds; // continua da dove si é fermato
    }
    
    interval = setInterval(() => {
        if (counter <= 0) {
            clearInterval(interval);
            remainingTime.innerHTML = 'Tempo scaduto'; // Countdown finito
        } else {
            remainingTime.innerHTML = counter; // Update al display 
            counter--;
        }
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval); // ferma l'intervallo
    remainingSeconds = counter; //  salva il counter attuale
});

resetBtn.addEventListener('click', () => {
    countdownInput.value = ''; // Cancella input
    clearInterval(interval); // Stop all'intervallo
    remainingTime.innerHTML = ''; // Reset display
    remainingSeconds = 0; //resetta lorario salvato
});
