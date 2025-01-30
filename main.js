let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');
let lightsaber = document.querySelector('#lightsaber');
let collapse = document.querySelector('#collapse');
let check= false;

console.log(lightsaber);


window.addEventListener('scroll',()=>{
    let scrolled= window.scrollY;
    if (scrolled>0){
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-yellow');
        collapse.classList.remove('bg-black');
        collapse.classList.add('bg-yellow');
        navbar.style.height= '70px'
        links.forEach((link)=>{
            link.style.color='var(--black)';
        });
        logoNavbar.src='http://127.0.0.1:5500/media/LogoBlack.png';
        lightsaber.src= 'http://127.0.0.1:5500/media/ls-b.png';
    
    }else{
        navbar.classList.add('bg-black');
        navbar.classList.add('bg-yellow');
        collapse.classList.add('bg-black');
        collapse.classList.add('bg-yellow');
        navbar.style.height='140px';
        links.forEach((link)=>{
            link.style.color='var(--yellow)';
        });
        logoNavbar.src = 'http://127.0.0.1:5500/media/LogoYellow.png';
        logoNavbar.src = 'http://127.0.0.1:5500/media/ls-y.png';
    }
})

lightsaber.addEventListener('click',()=>{
    if(check==false){
    lightsaber.style.transform= 'rotate(-90deg)'
    check= true;
    }else{
        lightsaber.style.transform='rotate(0deg)'
        check= false;
    }
});


//Chiamate Asincrone


let firstNumber= document.querySelector('#firstNumber');
let secondNumber= document.querySelector('#secondNumber');
let thirdNumber= document.querySelector('#thirdNumber');
let confirm = true

function createInterval(n,element,time){
    let counter=0;

    let interval= setInterval(()=>{
        if(counter < n){
            counter++
            element.innerHTML = counter;
        }else{
            console.log('Adesso mi fermo');
            clearInterval(interval);
        }
    },time);


    setTimeout(()=>{
      confirm=true;
    },8000);

}



//IntersectionObserver: è una Classe del browser che si occupa di far scattare una funziona nel momento in cui nel browser sono visibili gli elementi HTML che gli indichiamo
//new: keyword che mi permette di GENERARE UN OGGETTO partendo da una classe
//setTimeout: Fa partire un blocco di istruzioni dopo tot secondi

let observer = new IntersectionObserver((entries)=>{

    entries.forEach( (entry)=> {

        if(entry.isIntersecting && confirm){
            createInterval(100,firstNumber,100);
            createInterval(200,secondNumber,50);
            createInterval(300,thirdNumber,20);
            confirm = false;
        }
    });


});

observer.observe(firstNumber);


//Reviews

let reviews = [
    {user:'Matteo', description:'Il più bel sito di annunci del mondo', rank: 5},
    {user:'Alin', description:'Veramente non mi da di niente', rank: 1},
    {user:'Micheal', description:'Mi piace tranne per Star Trek', rank: 3},
    {user:'Arina', description:'Star Wars è meglio!', rank: 5},
]

let swipperWrapper = document.querySelector('.swiper-wrapper');


reviews.forEach( (recensione)=>{
    let div= document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML=`
     <div class="card-review">
             <p class="lead text-center">${recensione.description}</p>
             <p class="h4 text-center">${recensione.user}</p>
             <div class="d-flex justify-content-center star"> 
                
             </div>
            </div>
    `;
    swipperWrapper.appendChild(div);

});

let stars = document.querySelectorAll('.star');
// <i class= "fa-solid fa-star"></i>
stars.forEach((star,index)=>{

    for(let i = 1; i <= reviews[index].rank; i++){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid','fa-star');
        star.appendChild(icon);

    }


    // per vedere le stelle vuote:

    let difference = 5 - reviews[index].rank;

    for(let i = 1; i < difference; i++){
        let icon = document.createElement('i');
        icon.classList.add('fa-regular','fa-star');
        star.appendChild(icon);

    }
});




//Swiper



//L'inizializzazione dello swiper deve essere lultima cosa, quindi creamo le reviews sopra/prima
const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "flip",
    grabCursor: true,
    loop: true, 

  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });


