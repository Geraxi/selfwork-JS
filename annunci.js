

// .json: Javascript Object Notification
// API: chiavi che ci permettono di raggiungere un .json online

//fetch(): chiamata asincrona che ci permette di collegarci ad un JSON e da esso estrarne il dato sotto forma di promise.
//.then(): Questo metodo permette di convertire la promise nel dato strutturale e di poterlo utilizzare come tale su JS

//1. .fetch()= collego al .json e ne ottengo una promise
//2. .then()= converto la promise in un dato strutturale JS
//3. .then()= utilizzare il dato ottenuto

//.json(): un metodo delle Promise che mi permette di convertirla in oggetto JS




fetch('./annunci.json').then((response)=> response.json().then((data)=>{
data.sort((a,b)=> a.price-b.price);

let radioWrapper = document.querySelector ('#radioWrapper');
let cardWrapper= document.querySelector('#cardWrapper')

function radioCreate (){
    let categories= data.map((annuncio)=>annuncio.category);
    console.log(categories);

    //crea un altro array dove non si ripetono le categorie 1* metodo

   // let uniqueCategories= [];

    //categories.forEach ((category)=>{
        //if(!uniqueCategories.includes(category)){
           // uniqueCategories.push(category)
       // }
       // console.log(uniqueCategories);

   // });

   // 2* metodo per non far ripetere le categorie
   //Set(): Classe che mi restituisce, partendo da un array, un nuovo oggetto di tipo Set il quale contiene solo valori univoci
   // Array like : Array.from(): mi permette di convertire un array-like in un array

   let uniqueCategories= Array.from(new Set(categories));
   console.log(uniqueCategories);
   
   //Ora dobbiamo creare un radio button per ogni categoria:

   uniqueCategories.forEach((category)=>{

    let div= document.createElement('div');
    div.classList.add('form-check');
    div.innerHTML = ` 
     <input class="form-check-input" type="radio" name="categories" id="${category}">
     <label class="form-check-label" for="${category}">
      ${category}
     </label>
    
    `;

    radioWrapper.appendChild(div);
   });




}
radioCreate();

//Accorciare la stringa:

function truncateWord(string){
    if(string.length > 15){
        return string.split('')[0] + '...';
    }else{
        return string;
    }

}



function showCards(array){
    cardWrapper.innerHTML='';
    array.forEach((annuncio,i)=>{
        let div=document.createElement('div');
        div.classList.add('card-custom');
        div.innerHTML= `
        <img src="https://picsum.photos/${300+i}" alt="immagine casuale" class="img-fluid img-card">
        <p class="h2" title="${annuncio.name}"> ${truncateWord(annuncio.name)}</p>
        <p class="h4">${annuncio.category}</p>
        <p class="lead">${annuncio.price}</p>
        `;
        cardWrapper.appendChild(div);
    });
}

showCards(data);

//cliccando sul radio buttons, devono mostrare solo i prodotti nella categoria selezionata
let radioButtons= document.querySelectorAll('.form-check-input');
function filterByCategory(array){

    let categoria = Array.from(radioButtons).find((button)=>button.checked).id;
    //Un altro modo per scrivere questa sopra: 
    //let arrayFromNodeList= Array.from(radioButtons);
    //let button= arrayFromNodeList.find((bottone)=> bottone.checked);
    //let categoria= button.id;
    

     //La categoria voglio trovarla partendo dalla lista di tutti i bottoni e usare il metodo .find() array su questa lista. La condizione da utilizzare è il bottone che possiede l'attributo checked.

    if(categoria !='All'){
        let filtered=array.filter((annuncio)=>annuncio.category==categoria);
        return filtered;
    }else{
        return 
    }
    
};


radioButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
      globalFilter();
    })
});

let priceInput = document.querySelector('#priceInput');
let priceValue = document.querySelector('#priceValue');

function setPriceInput(){

    //Dopo aver catturato l'input voglio settare come proprietà max dello stesso il valore più alto tra i price 
    ///di ogni prodtto. Per farlo avrò quindi bisogno di un array che contenga solo i prezzi, a quel punto lo 
    //ordino in maniera decrescente/crescente

    let prices= data.map((annuncio)=> + annuncio.price);
    prices.sort((a,b)=> a-b);
    let maxPrice= Math.ceil(prices.pop);
    priceInput.max= maxPrice;
    priceInput.value= maxPrice;
    priceValue.innerHTML = maxPrice;

}

setPriceInput();

function filterByPrice(array){
    let filtered= array.filter((annuncio)=> +annuncio.price <= priceInput.value);
    return filtered;
}
priceInput.addEventListener('input', ()=>{
    priceValue.innerHTML = priceInput.value;
    globalFilter();
});

let wordInput= document.querySelector('#wordInput');
function filteredByWord(array){
let filtered= data.filter((annuncio)=> annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()));
return filtered;
}

wordInput.addEventListener('input', ()=>{
   globalFilter();

})

//Quello di cui abbiamo bisogno, ad ogni evento che scattino tutte e 3 le funzioni di filtro ma non siano applicate tutte e 3 sull'array data, ma siano concatenate ed ognuno filtra il risultato della funzione di filtro precedente.
//Anziche replicare la logica per ogni evento, scriviamo un unica funzione. 


function globalFilter(){
    let filterByCategory= filterByCategory(data); //ritorna un array filtrato per categoria
    let filterByPrice= filterByPrice(filterByCategory); // ritorna un array filtrato sia per categoria che per prezzo
    let filterByWord = filterByWord(filterByPrice); // array filtrato per categoria, prezzo e parola

    showCards(filteredByWord);
       
}


}));
