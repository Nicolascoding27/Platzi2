import { Component } from '@angular/core';
import {Product}from './product.model' //estamos importando el tipado para poder usarlo en el producto 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  amigos=[]
  power=10;
  bienvenida='Hola esta es mi Todo list ,agrega o borra lo que tienes que hacer' //esta variable puede ser llamada usando sting interpolation
//Creacion del metodo para usar con el boton
  addItem(){
    this.amigos.push(this.title);//con el this hago referencia al array
  }
//Ahora necesitamos borrar asi que creamos un metodo de borrado
//usamos typescript para tipear las variables ej: index:number
deleteItem(index:number){
  this.amigos.splice(index,1) //cuantos elementos deseo borrar, 1 posicion
}
///---Metodo para recibir y hacer uso del @output
clickProduct(id){ //recordar que recibo id
  console.log('product');
  console.log(id)//ahora enviamos al app-component.html para usarlo
}
//Vamos a recorrer un objeto que almacena las imagenes 
products:Product[] = [ //el tipado 'proteje nuestro codigo'
  {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '2',
    image: 'assets/images/hoodie.png',
    title: 'Hoodie',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '3',
    image: 'assets/images/mug.png',
    title: 'Mug',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '4',
    image: 'assets/images/pin.png',
    title: 'Pin',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '5',
    image: 'assets/images/stickers1.png',
    title: 'Stickers',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '6',
    image: 'assets/images/stickers2.png',
    title: 'Stickers',
    price: 80000,
    description: 'bla bla bla bla bla'
  }
];
}
