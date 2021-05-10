const API_URL='https://swapi.dev/api/' //almaceno la URL de la api, siempre fijo
const API_PEOPLE='people/:id/' //saco a la gente de la api--para ser organizados

//-Paso 2
function ObtenerPersonaje(id){
    //2.1 Creo el objeto request
    var objreq=new XMLHttpRequest();
    //2.2 crear variables para usarlas en la promesa
    const DONE=4
    const  STATUS =200
    const CHARACTER=`${API_URL}${API_PEOPLE.replace(':id',id)}`   ///convirtiendo A STING PARA QUE LA API ENTIENDA
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
        objreq.send();
    })
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
}).catch(onError) //importante para cojer los errores!!!!!

