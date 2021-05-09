const API_URL='https://swapi.dev/api/' //almaceno la URL de la api 
const API_PEOPLE='people/:id' //saco a la gente de la api

const LUKE_URL= `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts={crossDomain=true}
    function Obtain_character(id){

    }



////---SANTI'S CODE----//////
//direcciones de servdidor
const API_URL= 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

//Creo una función que ejecuta la petición request
function Obtain_character(id){
    //instancio un objeto de tipo request almacena la respuesta de la petición
    var objetoRequest = new XMLHttpRequest() //objetos para peticiones API
    const DONE   = 4
    const STATUS = 200
    const character = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

   //verificaciones para tratar de obtener comunicación con el servidor

   let promise = new Promise( (resolve, reject) => {
       //se inicia la petición
       objetoRequest.onreadystatechange = (() =>{
           //iniciamos petición
           if (objetoRequest.readyState === DONE){
               (objetoRequest.status === STATUS) ? resolve(JSON.parse(objetoRequest.responseText))
               : reject(`Error al consultar => ${character}`);
           }
       })
        //usamos .open() y .send() para hacer un request a un servidor
        /* 
        Para .open() necesitamos 3 parametros:
        1. obtención de datos --> 'GET' / enviar datos --> 'POST'
        2. Definir la ruta de archivo o API
        3. definir si es asincrono = true
        */
        objetoRequest.open('GET', character, true)
        //send() -->GET / send(string) -->POST
        objetoRequest.send();
    })
    return promise

}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

//first request
//callback hell

/* Obtain_character(1)
.then( personaje => {
    console.log(`Hola soy ${personaje.name}`)
    Obtain_character(2)
    .then( personaje => {
        console.log(`Hola soy ${personaje.name}`)
        Obtain_character(3)
        .then( personaje => {
            console.log(`Hola soy ${personaje.name}`)
            Obtain_character(4)
            .then( personaje => {
                console.log(`Hola soy ${personaje.name}`)
            })
        })
    })
})
.catch(onError); */

async function Obtain_characters() {
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map( id => Obtain_character(id)) //array de promesas
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }catch (id){
        onError(id)
    }
}

Obtain_characters()

//manejo en paralelo

//encadenando promesas
/* Obtain_character(1)
.then(personaje => {
    console.log(`Hola mi nombre es ${personaje.name}`)
    return Obtain_character(2)
})
.then(personaje => {
    console.log(`Hola mi nombre es ${personaje.name}`)
    return Obtain_character(3)
})
.then(personaje => {
    console.log(`Hola mi nombre es ${personaje.name}`)
    return Obtain_character(4)
})
.then(personaje => {
    console.log(`Hola mi nombre es ${personaje.name}`)
})
.catch(onError) */



