let remainingTime = document.querySelector('#remainingTime');
let countdownInput = document.querySelector('#countdown-input');
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let resetBtn = document.querySelector('#resetBtn');

let interval;
let counter;
let remainingSeconds = 0;

startBtn.addEventListener('click', () => {
    clearInterval(interval); // Cancella l'intervallo precedente

    // Inizializza counter e remainingSeconds con il valore inserito o precedente
    if (countdownInput.value && parseInt(countdownInput.value, 10) > 0) {
        counter = parseInt(countdownInput.value, 10);
        remainingSeconds = counter;
    } else if (remainingSeconds !== 0) {
        counter = remainingSeconds;
    } else {
        alert('Inserisci un valore di countdown valido!');
        return;
    }

    interval = setInterval(() => {
        if (counter < 0) {
            clearInterval(interval);
            remainingTime.innerHTML = 'Tempo scaduto'; // Countdown finito
        } else {
            remainingTime.innerHTML = counter; // Aggiorna il display
            counter--;
            remainingSeconds = counter; // Aggiorna remainingSeconds
        }
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval); // Ferma l'intervallo
    remainingSeconds = counter; // Salva il valore attuale
});

resetBtn.addEventListener('click', () => {
    countdownInput.value = ''; // Cancella input
    clearInterval(interval); // Ferma l'intervallo
    remainingTime.innerHTML = '00:00'; // Reset del display
    remainingSeconds = 0; // Resetta l'orario salvato
});


