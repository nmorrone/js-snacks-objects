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


/*apro un ciclo for per ciclare gli elementi pushare nell'array vuoto
tutti gli animali appartenenti alla classe mammiferi dell'array Animals */


//apro ciclo for con lunghezza dell'array Animals
for (let i = 0; i < animals.length; i++) {

    //dichiaro la costante che acquisisce l'oggetto
    const currentAnimal = animals[i]

    //verifico funzionamento acquisizione
    console.log(currentAnimal)


    //dichiaro la condizione che mi interessa
    if (currentAnimal.classe === 'mammiferi') {

        //se vera pusho
        mammiferi.push(currentAnimal)
    }

}

/*controllo che nell'array mammiferi vengano 
inseriti solo gli oggetti appartenente alla categoria */

console.log(mammiferi)