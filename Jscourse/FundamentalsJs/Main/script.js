// //Clase 1 => Variables \

// //declaracion variables 
// var nombre;
// //Inicializacion variable
// nombre='Nico lindo';
// //; es simplemento una convencion hay casos puntuales en los que tenemos que agregar  el punto y coma
// console.log(nombre+' '+'rico')
// // Js es un lenguaje debilmnete tipado, esto hace que no concemos los tipos de las variables por lo cual debemos tener cuidado
// //Transformaciones de strings 
// var apellido="Diaz";
// var appellidoUpperCase=apellido.toUpperCase()
// //Primer caracter o caracteres 
// var firstletter=apellido.charAt(0)
// console.log(firstletter)
// //Cantidad de letras 
// var numberOfLetters=apellido.length
// console.log(numberOfLetters)
// //Interpolacion de variables 
// var fullName=`${appellidoUpperCase}+${firstletter}`
// console.log(fullName)

// // Access to a substring
// var str= nombre.charAt(1)+nombre.charAt(2)
// //second way
// var srt2=nombre.substr(1,2)
// //Number variables
// var edad=27
// edad+=1
// //Restar
// edad-=1
// //Aproximar 
// Math.round()
// //pasar a estring 
// var total=294.4444444
// var total_round_3=total.toFixed(3)//3 decimales
// var totalString=parseFloat(total)

// //Funciones 
// //Las funciones sirven para reutilizar codigo
// //Alcance de las funciones, la idea es no modificar las variables globales 
// /// De esta manera lo que estamos haciendo es no modificar las variables globales
// // var nombre ='Nicolas'
// // function returnNameUpperCase(nombre){
// //     nombre=nombre.toUpperCase()
// //     console.log(nombre)
// // }
// // returnNameUpperCase(nombre)
// //Objetos 
// var Dario ={
//     nombre:'Dario',
//     apellido:'Diaz',
//     age:15
// }
// var Nicolas ={
//     nombre:'Nicolas',
//     apellido:'Diaz',
//     age:21
// }

// //Just getting the attribute name --NEW WAY TO DO IT 
// function nameToUpperCase({nombre}){
//     console.log(nombre.toUpperCase())
// }
// nameToUpperCase(Dario)
// nameToUpperCase(Nicolas)

// //Another way to call the function 
// function nameToUpperCase(persona){ //The patameter is an object
//     //var (nombre)
//     var { nombre }=persona//Im calling the attribute of the object here by using {}
//     console.log(nombre.toUpperCase())
// }

// //solo hay un parametro el cual corresponde al objeto
// function nameAndAge(persona){
//     var {nombre}=persona
//     var{age}=persona
//     console.log(`Hola mi no3mbre es ${nombre},y tengo ${age}`)
// }
// nameAndAge(Dario)

// function cumple(persona){
//     persona.age+=1
//     var {age}=persona
//     console.log(`mi edad es ${age}`)
// }//El objeto se ve modificado
// cumple(Nicolas)
// //Js behaves different with objects, los objetos que pasamos por paremtro se pasan por referencia
// ///Como llamar un nuevo objecto que tenga los mismos atributos del objeto anterior
// //---Debemos retornar un objeto 
// function retornandoObjeto(persona){
//     return {
//         ...persona,//Aca es donde duplico el objeto
//         age:persona.age+=1
//     }
// }
// retornandoObjeto(Dario)
// //Tenemos dos opciones la primera es modificar un objeto o duplicarlo y cambiarle un atributo 
// //--Parametros como referencia o valor 
// function cumpleanos(persona)
// //---COMPARACIONES EN VARIABLES 
// var x =4;
// var y='4'
// x==y//true --It compares the intrinsic value but it does not compare the data type 
// x===y//false-- It compares the value and the data type 
// //Is it better to use the === instead of ==
// var otraPersona={
//     ...Dario
// }
// var test='this is a test'

// // ---Condicionales----

// var persona1={
//     nombre:'Sasha',
//     ingeniero:true,
//     edad:19 
// }
// var persona2={
//     nombre:'Nico',
//     ingeniero:false ,
//     edad:13
// }

// function imprimirProfesiones(persona){
//     console.log(`${persona.nombre} es:`)
//     persona.ingeniero ? console.log('Ingeniero') : console.log('pussy')
// }
// function imprimirSiesMayordeEdad(persona){
//     persona.edad>18 ? console.log(`${persona.nombre} es mayor de edad`) : console.log(`${persona.nombre} es menor de edad`)
// }
// const MAYORIA_DE_EDAD=18
// //this function returns true or false
// function imprimirSiesMayordeEdad2(persona){
//     return persona.edad>=18
// }
// imprimirSiesMayordeEdad(persona1)
// imprimirSiesMayordeEdad(persona2)
// var test=imprimirSiesMayordeEdad2(persona1)
// console.log(test)

// ///---ARROW FUNCTION----///
// //Asign to a variable a function
// var persona1={
//     nombre:'Sasha',
//     ingeniero:true,
//     edad:19, 
//     peso:75
// }
// const ES_MAYOR_DE_EDAD=persona=>{ //cuando solo tengo una variable no uso parentesis
//     persona.edad > 18? console.log('I can drink') : console.log('I cant drink')
// }
// ES_MAYOR_DE_EDAD(persona1)
// //--DECONSTRUCTING THE PARAMETER    
// console.log(`Al inicio del año Sasha pesa ${persona1.peso}`)

// function ciclo_edad(persona){
// for(let i=1;i<356;i++){
//     let random=Math.random()//numero entre 0 y 1`
//     if(random<0.25){
//         AUMENTAR_DE_PESO(persona)
//     }
//     else if(random<0.5){
//         DISMINUIR_DE_PESO(persona)
//     }
// }  //aumenta de peso si es menor a 0.25 y si es menor a 0.5 adelgaza
//     console.log(persona)
// }

// const AUMENTAR_DE_PESO=persona=> persona.peso+=0.2 //flecha sin llaves hace que 
// const DISMINUIR_DE_PESO=(persona)=>{
//     persona.peso-=0.2
// }//Tofixed()solo lo que esta despues de la coma
// // ciclo_edad(persona1)
// ///--while-------
// let persona1={
//     nombre:"nico",
//     peso:75
// }
// const COME_MUCHO= ()=>Math.random()<0.3
// const REALIZA_DEPORTE=()=>Math.random()<0.4//40% de los dias 
// let META_PESO= persona1.peso-3
// let dias=0
// while(persona1.peso>META_PESO){
//     if(COME_MUCHO()){
//         AUMENTAR_DE_PESO(persona1)
//     }
//     if(REALIZA_DEPORTE()){
//         DISMINUIR_DE_PESO(persona1)
//     }
//     dias +=1               
// }
// console.log(`Pasaron ${dias} dias hasta que Nick adelgazo 3kg`)
///----Do while----
// let contador=0;
// let llueve=()=>Math.random()<0.25//Me indica que llueve el 25% de las veces 
// do{
//     contador ++;
// }while(!llueve())//mientras no llueva 
// // console.log(`Fui a ver si llovia ${contador} veces`)

// let frecuency= contador===1 ? console.log(`Fui a ver si llovia ${contador} vez`):console.log(`Fui a ver si llovia ${contador} veces`)

//---SWITCH + DOM MANIPULATION-----------

// const VER_RESULTADO=document.querySelector('.ver')
// const SIGNO=document.querySelector('.signo')
// const RESULTADO=document.querySelector('.result')
// const SHOW_RESULT=()=>{
//     var signo=SIGNO.value
//     var signoL=signo.toLowerCase()
//     switch (signoL){
//         case 'sagitario':
//             RESULTADO.innerHTML=
//             'Tu cumpleaños es en Enero'
//         break;
//         case 'tauro':
//             RESULTADO.innerHTML=
//             'Tu cumpleaños es en Abril'
//         break;
//         case 'fuckboy':
//             RESULTADO.innerHTML=
//             'Tu cumpleaños es en Pussy'
//         break;
//         case 'worker':
//             RESULTADO.innerHTML=
//             'Tu cumpleaños es en NUNCA TRABAJA'
//         break;
//         case 'ceo':
//             RESULTADO.innerHTML=
//             'Tu cumpleaños es JAMAS SIGUE TRABAJANDO'
//         break;
//         default:
//             RESULTADO.innerHTML=
//             'INSERTA UN VALOR CORRECTO NO SEAS HPTA'
//         break;
//     }
//     // console.log(SIGNO.value)
//     SIGNO.value=''
// }
// VER_RESULTADO.addEventListener('click',()=>{SHOW_RESULT()})

//----Arrays----//
var audi={
    brand:'audi',
    year:2020
}
var volvo={
    brand:'audi',
    year:2019
}
var mazda={
    brand:'mazda',
    year:2016
}
var cars=[audi,volvo,mazda]

//--Filtrar elementos 
var carros_nuevos=cars.filter((carro)=>carro.year>2018)
// --Con el objeto desagregado 
var carros_nuevos2=cars.filter(({year})=>year>2018)

//-Como modificar arrays--
//--Usar funcion Map 
//Map modifica el array 
var carros_nuevos3=cars.map(NEW_CARS)
const  NEW_CARS= carros=>{
    carros.year+=1
    return carros.year
}

const  NEW_CARS5= carros=>{
    return {
        ...cars,//duplico el objeto
        year:carros.year+=1
    }
}
///-PRANTICANDO LA DESAGREGACION DE OBJETOS Y LAS TRANSFORMACIONES DE ARRAYS
// let persona1={
//     nombre:"nico",
//     peso:75
// }
// let persona2={
//     nombre:"Felipe",
//     peso:80
// }
// let persona3={
//     nombre:"Carlos",
//     peso:81
// }
// var personas=[persona1,persona2,persona3]//creacion del array con objetos 
// //Creacioon de la funcion callback para duplicar y modificar el objeto
// const SUBIDA_DE_PESO2=(persona)=>{
//     return {
//     ...persona,//duplicate the object
//     peso:persona.peso+=1//wrong 
//     }
// }
// persona.peso+=1//le sumo 1 a persona.peso tambien
// persona.peso= persona.peso+1
// const NEW_PERSONAS=personas.map((persona)=>{
//     return {
//         ...persona,//duplicate the object
//         peso:persona.peso+1
//         }
// })
// //Creacion del nuevo array con el objeto modificado 
// console.log('Nuevito2')
// console.log(NEW_PERSONAS)
// console.log(personas[0]===NEW_PERSONAS[0])

///---Reduce------////
////---Esta es una forma mas organizada y me permite separar el reduce----///
const reducer=(acum,persona)=>{
    return acum +persona.cantidadDeLibros
}
let totalLibros=libros.reduce(reducer,0)

///---Clases en JS---- prototipos y clases---///
///Definicion de prototipo
function persona(name,age,interests,height){
    this.name=name
    this.age=age
    this.interests=interests
    this.height=height 
}
//Siempre colocar las funciones del prototipo juntas    
persona.prototype.sayhi=function(){
    console.log(`Hola soy ${this.name}`)
}
persona.prototype.soyalto=()=> console.log(this)
//The word new is just for creating objects 
const Nico=new persona('nico',20,'coding',2)
Nico.sayhi()
Nico.soyalto()//las arrow functions tienen un this differente a las funciones normales.
function desarrollador(nombre,apellido){
    this.nombre=nombre,
    this.apellido=apellido
}
function heredaDe(prototipoHijo,prototipoPadre){
    var fn=function(){}
    fn.prototype=prototipoPadre.prototype
    prototipoHijo.prototype=new fn 
    claseHija.prototype.constructor=prototipoHijo
}
///---WHAT IS A PROTOTYPE
function Particle(){
    this.x=100;
    this.y=99;
    // this.show=function(){
    //     point=(this.x,this.y);
    // }
}
particle.prototype=function(){
    PointerEvent(this.x,this.y)
}
var p=new particle()
//proto propertie 
heredaDe()

//--clases en js----
//Por debajo todos siguen siendo prototipos
class Persona{
    constructor(apellido,name,altura){
        this.apellido=apellido
        this.name=name
        this.altura=altura
    }
    soyAlto(){ 
        return this.altura>1.8
    }
    sayHi(callback){
        console.log(`Hola soy ${this.name} la persona`)
        if(callback){ 
            callback(this.nombre,this.apellido,false)
        }
    }
}
var nico=new Persona('diaZ','NAME',1.9)
//--herencia = extends
class desarrollador extends Persona{
    constructor(pipi,pussy,altura){ //debemos corear el constructor
    super(pipi,pussy,altura)
    }
    sayHi(callback){
    if(callback){ 
        callback(this.nombre,this.apellido,false)
        console.log(this)
    }
    }
}
var oscar= new desarrollador('oscar','gomez',1.89)
//SI HEREDO FUNCIONES 


//--ASINCRONISMO----///
//Podemos pasar fubncuiones como atributos
function responderSaludo(nombre,apellido,esDev){
    this.nombre=nombre 
    this.apellido=apellido 
    this.esDev=esDev
    console.log(`Hi ${nombre} ${apellido}`)
}
console.log('a')
setTimeout(()=>console.log('b'),2000) 
console.log('c')