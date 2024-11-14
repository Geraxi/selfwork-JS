let nameInput= document.querySelector('#nameInput')
let numberInput= document.querySelector('#numberInput')

btnShow= document.querySelector('#btnShow')
btnAdd= document.querySelector('#btnAdd')
btnRemove= document.querySelector('#btnRemove')
btnEdit= document.querySelector('#btnEdit')

let containerContact= document.querySelector('.containerContacts')

let rubrica= {
    listaContatti:[
        {name:'Mario', number:1234567890},
        {name:'Walter', number:234567654}
    ],

    showContacts: function(){
        this.listaContatti.forEach(contatto =>{
            let p= document.createElement('p')
            p.innerHTML= `${contatto.name}: ${contatto.number}`
            containerContact.appendChild(p)
        })
    },

    addContacts: function(newName, newNumber){
        this.listaContatti.push({name:newName, number: newNumber})
    },

    removeContacts: function(){
        let filtered= this.listaContatti.filter(contatto => contatto.name !=removeName)
        this.listaContatti=filtered
    },

    editContacts:function (nome,numero){
        this.listaContatti.forEach(contatto=>{
            if(contatto.name==nome){
                contatto.number=numero
            }
        })
    }
}

btnShow.addEventListener('click',()=>{
    if(check==false){
        rubrica.showContacts()
        btnShow.innerHTML='Nascondi Contatti'
        check==true
    }else{
        check=false
        containerContact.innerHTML=''
        btnShow.innerHTML='Mostra Contatti'
    }
})

btnAdd.addEventListener('click', () => { 
    if (nameInput.value !== '') { 
        rubrica.addContacts(nameInput.value, numberInput.value);
        nameInput.value = '';
        numberInput.value = '';
    }
});


btnRemove.addEventListener('click',()=>{
    if(nameInput !=''){
        rubrica.removeContacts(nameInput.value)
        nameInput.value=''
    }
})

btnEdit.addEventListener('click',()=>{
    if(nameInput !=''){
        rubrica.editContacts(nameInput.value, numberInput.value)
        nameInput.value=''
        numberInput.value=''
    }
})
