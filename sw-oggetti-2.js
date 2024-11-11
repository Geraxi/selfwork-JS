
let name;
let number;

let check = Number(prompt('Premi 1 se vuoi eliminare o aggiungere un contatto, \n Premi 2 se vuoi modificare un contatto'));

let rubrica = {
    listaContatti: [
        {nome: 'Nicola', number: 3331111111},
        {nome: 'Lorenzo', number: 3332222222},
        {nome: 'Paola', number: 3333333333},
        {nome: 'Jenny', number: 3334444444},
    ],

    showAllContacts: function() {
        this.listaContatti.forEach(contatto => {
            console.log(`${contatto.nome}: ${contatto.number}`);
        });
    },

    showContact: function(nome) {
        let contatto = this.listaContatti.find(contatto => contatto.nome === nome);
        if (contatto) {
            console.log(`Contatto trovato: ${contatto.nome}: ${contatto.number}`);
        } else {
            console.log('CONTATTO NON TROVATO');
        }
    },

    removeAddContacts: function(nome, numero) {
        let contatto = this.listaContatti.find(contatto => contatto.nome === nome);
        let index = this.listaContatti.indexOf(contatto);
        if (contatto) {
            this.listaContatti.splice(index, 1);
            console.log('CONTATTO ELIMINATO');
        } else {
            this.listaContatti.push({nome: nome, number: numero});
            console.log('CONTATTO AGGIUNTO');
        }
    },

    editContact: function(nome, newNumber) {
        let contatto = this.listaContatti.find(contatto => contatto.nome === nome);
        if (contatto) {
            contatto.number = newNumber;
            console.log('CONTATTO MODIFICATO');
        } else {
            console.log('CONTATTO NON TROVATO');
        }
    }
}

//creiamo lo switch per dividere le funzionalità e gestirle meglio

switch (check) {
    case 1:
        name = prompt('Inserisci il nome del contatto');
        number = Number(prompt('Inserisci il numero del contatto'));
        rubrica.removeAddContacts(name, number);
        break;
    case 2:
        name = prompt('Inserisci il nome del contatto');
        number = Number(prompt('Inserisci il nuovo numero del contatto'));
        rubrica.editContact(name, number);
        break;
    default:
        console.log('Scelta non valida');
        break;
}

rubrica.showAllContacts();
