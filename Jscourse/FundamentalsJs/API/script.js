const API_URL='https://swapi.dev/api/' //almaceno la URL de la api, siempre fijo
const API_PEOPLE='people/:id' //saco a la gente de la api

const LUKE_URL= `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts={crossDomain=true}
//funcion para hacer el request en vez de el .get de Jquery 
    function Obtain_character(id){
        var objetoRequest= new XMLHttpRequest(),
        const DONE   = 4
        const STATUS = 200
        const character = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    //necesito crear una promesa para comunicarme con el servidor
    }



////---SANTI'S CODE----//////
//direcciones de servdidor
const API_URL= 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/' //persona con el ID1 

//Creo una función que ejecuta la petición request
function Obtain_character(id){
    //instancio un objeto de tipo request almacena la respuesta de la petición
    var objetoRequest = new XMLHttpRequest() //objetos para peticiones API//COMUNICACION CON EL SERVIDOR--CON QUE ME VOY A COMUNICAR?
    const DONE   = 4//HAY 5 STATES EL 0 INICIADO, 1 CARGANDO, 2 YA SE CARGO,3 HAY INFO Y 4 SE COMPLETO
    const STATUS = 200// TIPO 100, 200 EXITOSAS, 300 SE NECESITAN ACCIONES ADICIONALES, 400 HAY UN ERROR EN EL QUE HACE LA PETICION, 500 ERROR DEL SERVER. 
    const character = `${API_URL}${PEOPLE_URL.replace(':id',id)}`//string 
   //verificaciones para tratar de obtener comunicación con el servidor
///---Promesa para hacer la comunicacion con el servidor 
   let promise = new Promise( (resolve, reject) => {
       //se inicia la petición
       objetoRequest.onreadystatechange = (() =>{ //readystatechange means that the attribute readyState changes
           //iniciamos petición
           if (objetoRequest.readyState === DONE){
            ///---CONDICION 2
            (objetoRequest.status === STATUS) ? resolve(JSON.parse(objetoRequest.responseText))//DEVVUELVO SOLICITUD SE RECIBE EN PLANO Y SE CONVIERTE A JSON
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
       // open ( <method>, <url>, <is async>)
        //send (<request_data>)
        objetoRequest.open('GET', character, true)//METODO GET--PRIMERO METODO, LUEGO DONDE HAGO LA PETICION, TRUE ES ASYNCRONO Y FALSE NO LO ES.  
        //send() -->GET / send(string) -->POST
        objetoRequest.send(); //ENVIA LA PETICION AL SERVIDOR
    })
    return promise

}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

//first request
//callback hell

/* Obtain_character(1)
.then( personaje => { //CON THEN OBTENGO EL PERSONAJE 
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
.catch(onError); */ //COJO EL ERROR 

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
///OBJETO TIPO PROMESA 
//manejo en paralelo
//-like callback hell but with =return in the function
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



///---Practica ---Nicolas Diaz 
//PASO 1 poner la API en unos   URLS 
//PASO 2 crear la funcion para obtener el caracter.
//PASO 3 Crear la promesa para poder obtener la informacion del servidor--funcion asincrona
//PASO 4 Usar las promesas con try and catch y encadenarlas

//--Paso 1 
const API_URL='https://swapi.dev/api/' //almaceno la URL de la api, siempre fijo
const API_PEOPLE='people/:id' //saco a la gente de la api

//-Paso 2 
function ObtenerPersonaje(id){
    //2.1 Creo el objeto request 
    var objreq=new XMLHttpRequest();
    //2.2 crear variables para usarlas en la promesa
    const DONE=4
    const  STATUS =200
    const CHARACTER=`${API_URL}${PEOPLE_URL.replace('id',id)}`   ///convirtiendO A STING PARA QUE LA API ENTIENDA 
    //--PASO3---//las promesas tienen estos dos parametros por defecto
    let promise=new Promise((resolve,reject) =>{
        objreq.onreadystatechange=(()=>{
            //condiciones para la peticion
        if(objreq.readyState===DONE){
        //condicion2    
        (objreq.status===STATUS)? resolve(JSON.parse(objreq.responseText))//CONVIERTE TEXTO PLANO EN JSON
        : reject(`Error al consultar : ${CHARACTER} `);
        }
        })
        objreq.open('GET',CHARACTER,true)
        objreq.send();})
    return promise
}
//PASO 3 TRY AND CATCH// SE NECESITA CREAR LA FUNCION OnError
function onError(id){
    console.log(`Tenemos un error al obtener ${id}`)
}  

//--First request--------//De manera paralela
//se puede con aync o juntando objetos 
////---Con promesas en paralelo

ObtenerPersonaje(1).
then(personaje => {
    console.log(`Hola mi nombre es ${personaje.name}`)
     return ObtenerPersonaje(2)
})
.then(personaje => {
    console.log(`Hola mi nombre es ${personaje.name}`)
     return ObtenerPersonaje(3)
})  
.then(personaje => {
    console.log(`Hola mi nombre es ${personaje.name}`)
     return ObtenerPersonaje(4)
})
.then(personaje => {
    console.log(`Hola mi nombre es ${personaje.name}`)
})

