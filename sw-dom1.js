let paragrafi = document.querySelectorAll('p');
let btnColor= document.querySelector('#btnColor');
let btnBold = document.querySelector('#btnBold');
let btnHide = document.querySelector('#btnHide');

btnColor.addEventListener('click', () => {
    paragrafi.forEach(paragrafo => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        paragrafo.style.color = `rgb(${r},${g},${b})`;
    });
});

btnBold.addEventListener('click', () => {
    paragrafi.forEach(paragrafo => {
        paragrafo.style.fontWeight = 'bold';
    });
});

btnHide.addEventListener('click', () => { 
    paragrafi.forEach(paragrafo => {
        if (paragrafo.style.display === 'block' || paragrafo.style.display === '') {
            paragrafo.style.display = 'none';
        } else {
            paragrafo.style.display = 'block';
        }
    });
});

