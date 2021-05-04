//Clase 1 => Variables \

//declaracion variables 
var nombre;
//Inicializacion variable
nombre='Nico lindo';
//; es simplemento una convencion hay casos puntuales en los que tenemos que agregar  el punto y coma
console.log(nombre+' '+'rico')
// Js es un lenguaje debilmnete tipado, esto hace que no concemos los tipos de las variables por lo cual debemos tener cuidado
//Transformaciones de strings 
var apellido="Diaz";
var appellidoUpperCase=apellido.toUpperCase()
//Primer caracter o caracteres 
var firstletter=apellido.charAt(0)
console.log(firstletter)
//Cantidad de letras 
var numberOfLetters=apellido.length
console.log(numberOfLetters)
//Interpolacion de variables 
var fullName=`${appellidoUpperCase}+${firstletter}`
console.log(fullName)

// Access to a substring
var str= nombre.charAt(1)+nombre.charAt(2)
//second way
var srt2=nombre.substr(1,2)
//Number variables
var edad=27
edad+=1
//Restar
edad-=1
//Aproximar 
Math.round()
//pasar a estring 
var total=294.4444444
var total_round_3=total.toFixed(3)//3 decimales
var totalString=parseFloat(total)

//Funciones 
//Las funciones sirven para reutilizar codigo
//Alcance de las funciones, la idea es no modificar las variables globales 
/// De esta manera lo que estamos haciendo es no modificar las variables globales
// var nombre ='Nicolas'
// function returnNameUpperCase(nombre){
//     nombre=nombre.toUpperCase()
//     console.log(nombre)
// }
// returnNameUpperCase(nombre)
//Objetos 
var Dario ={
    nombre:'Dario',
    apellido:'Diaz',
    age:15
}
var Nicolas ={
    nombre:'Nicolas',
    apellido:'Diaz',
    age:21
}

//Just getting the attribute name --NEW WAY TO DO IT 
function nameToUpperCase({nombre}){
    console.log(nombre.toUpperCase())
}
nameToUpperCase(Dario)
nameToUpperCase(Nicolas)

//Another way to call the function 
function nameToUpperCase(persona){ //The patameter is an object
    //var (nombre)
    var { nombre }=persona//Im calling the attribute of the object here by using {}
    console.log(nombre.toUpperCase())
}

//solo hay un parametro el cual corresponde al objeto
function nameAndAge(persona){
    var {nombre}=persona
    var{age}=persona
    console.log(`Hola mi no3mbre es ${nombre},y tengo ${age}`)
}
nameAndAge(Dario)

function cumple(persona){
    persona.age+=1
    var {age}=persona
    console.log(`mi edad es ${age}`)
}//El objeto se ve modificado
cumple(Nicolas)
//Js behaves different with objects, los objetos que pasamos por paremtro se pasan por referencia
///Como llamar un nuevo objecto que tenga los mismos atributos del objeto anterior
//---Debemos retornar un objeto 
function retornandoObjeto(persona){
    return {
        ...persona,//Aca es donde duplico el objeto
        age:persona.age+=1
    }
}
retornandoObjeto(Dario)