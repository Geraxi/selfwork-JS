const rubrica = {
    lista_contatti: [
        {contact_name: 'Yoda', phone_number: 3333333333},
        {contact_name: 'Anakin', phone_number: 344444444},
        {contact_name: 'Obi-wan', phone_number: 355555555},
    ],

    showContacts: function() {
        this.lista_contatti.forEach((contatto) => {
            let div = document.createElement('div');
            div.classList.add('card-custom');

           
            div.innerHTML = `
                <p class='lead'>Nome: ${contatto.contact_name}</p>
                <p>Telefono: ${contatto.phone_number}</p>
                <i class='fa-solid fa-trash-can icon'></i>
            `;

            
          contactWrapper.appendChild(div);
        });

        showContactsBtn.addEventListener('click',()=>{
            if(check==false){
                rubrica.showContacts();
                check==true;
                this.showContactsBtn.innerHTML='Nascondi Contatti';
            }else{
                contactsWrapper.innerHTML='';
                check==false;
                showContactsBtn.innerHTML='Mostra Contatti';
            }
        });
    },

    addContact:function(newName, newNumber){
        this.lista_contatti.push({contact_name: newName, phone_number: newNumber});
        this.showContacts();
    }
};


rubrica.showContacts();
