
let input= document.querySelector('input')
let text= document.querySelector('textarea')
let btn= document.querySelector('button')
let container= document.querySelector('.container')


btn.addEventListener('click',()=>{
    let date= new Date()
    let formatDate= date.tolacaleDateString
    if(input.value=='' && text.value==''){
        alert('i campi sono vuoti non puoi creare il tuo articolo')
    }else{
        let div= document.createElement('div')
        div.style.backgroundColor='#d3d3d3'
        div.style.padding='20px'
        div.style.marginTop='20px'
        div.style.border= '2px solid black'
        div.innerHTML=`<h2>${input.value}</h2> <p>${text.value}</p> <i>${formatDate}</i>`
        container.appendChild(div)
        input.value=''
        text.value=''
    }
})
