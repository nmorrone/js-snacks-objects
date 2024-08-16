console.log('JS Snacks Variabili')

/* crea un array che contiene una lista di animali
con varie proprietà che li categorizzano */


//crea un array che contiene una lista di "oggetti"
const animals = [

    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },

    {
        nome: 'tigre',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },

    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },

    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },

    {
        nome: 'coccodrillo',
        famiglia: 'crocodilidi',
        classe: 'rettili',
    },

]

//creo un altro array vuoto che conterrà una singola categoria

const mammiferi = []

//verifico funzionamento
console.log(animals)