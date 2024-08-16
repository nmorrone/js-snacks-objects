console.log('JS Snacks 2 - Patente')


/*crea un array che contiene un elenco di persone con 
(nome, cognome, età), successivamente crea un altro array
che contenga una frase con nome e cognome della persone e,
in base all'età della stessa, se può o non può guidare */


//creo Array persone objects

const people = [

    {
        nome: 'Tommaso',
        cognome: 'Rossi',
        età: 24,
    },

    {
        nome: 'Sara',
        cognome: 'Verdi',
        età: 23,
    },



    {
        nome: 'Lucia',
        cognome: 'Garibaldi',
        età: 15,
    },

    {
        nome: 'Marco',
        cognome: 'Celentano',
        età: 17,
    },

    {
        nome: 'Giuseppe',
        cognome: 'Rossi',
        età: 54,
    },
]

//verifico funzionamento
console.log(people)

//creo un nuove Array per il controllo
const validation = []

//apro ciclo for
for (let i = 0; i < people.length; i++) {

    let currentPerson = people[i]

    //verifico funzionamento
    console.log(currentPerson)

    //apro condizione di maggiore età
    if (currentPerson.età >= 18) {

        currentPerson = currentPerson.nome + ' ' + currentPerson.cognome + ' Congratulazioni puoi guidare!'

        validation.push(currentPerson)


    }

    //condizione di minore età
    else {
        currentPerson = currentPerson.nome + ' ' + currentPerson.cognome + ' Mi dispiace non puoi guidare!'
        validation.push(currentPerson)
    }

}

console.log(validation)
