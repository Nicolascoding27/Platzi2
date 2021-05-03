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