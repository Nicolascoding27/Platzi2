//Curso basico de js \
//Pririves values 
//Numbers 
let number1=40;
let string1='Hola soy Nico';
//Empty values
null
undefined
//Object type values
let array1=[{name:'Nicolas',lastName:'Diaz',age:15 }]
//typeof to get what is the value type of whatever I'm coding
//typeof Null= OBJECT typeof Array=Object
//Variables 
var edad;
edad=15;//Inicializo la variable despues
//Hoisting
//Ejemplo 1; si corre
Hello();
function Hello(){
    console.log('Nicolas says hi')
}
//Ejemplo 2; no corre
Hello()//la variable se almacena primero me va a aparecer undefined
const Hello =()=>'Hello'//Es 6 
//Funciones; Tipos de funciones 
//Declarativas 
function Ejemplo(){return true};
//Expresiva
var miFuncion = function(){};
//Template string `${este es un template string}`
//CALLBACK FUNCTION 
//Steps to build a Callback function
//First build a function that will serve as your callback
function firstCallBack(name){
    console.log(`Hello  ${name}`)
}
//Then build the function that you will call to use the function that you already created
function getName(callback){
    const name=prompt('Whats your name');
    callback(name)
}
getName(firstCallBack);
