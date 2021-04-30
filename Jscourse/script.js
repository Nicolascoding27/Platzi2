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
//Hoisting=> Just in var and function
//Ejemplo 1; si corre
Hello();
function Hello(){
    console.log('Nicolas says hi')
}
//Ejemplo 2; no corre
Hello()//la variable se almacena primero me va a aparecer undefined
const Hello =()=>'Hello'//Es 6 
//Ejemplo 3; Undefined
console.log(Diego)
var Diego=5;//First js adds the value of undefined to the variable
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
//Scope 
//Example of the global scope
var a=1;
let b =2;
//Local scope and block scope;
//block scope vs local scope The difference lies in the use of let and const that are block scope variables
//Block scope example
if(true){
    var a=1;
    let cat="Miuuuuu";
    const dog="woooff"
}
console.log(a)//1 
console.log(cat)//reference error
console.log(dog)//reference error
//Local and glocal scoope 
var d=1;
if(true){
  var d=2
}
console.log(d)//2
//Ejemplo 2 
let a=10 
if(true){
    let a=20
}
console.log(a)//10
//Ejemplo 3
let a=5
if(true){
    a=20
}
console.log(a)//20
//Whatever is in global cannot access to what is locally 
//Whatever is local can access to what is global

//Cohersion => Turning a string into a number or viceversa
//EXAMPLE:
//Explicit cohercion
//String and Number method
var c=String(a);//
var d=Number(a);
//Implicit operation--Javascript helps us to create cohersion 
var a=4+"7";//+ operator creates cohersion
console.log(a)//47
var b=4*"7"//operator * does not create cohersion
console.log(b)//28