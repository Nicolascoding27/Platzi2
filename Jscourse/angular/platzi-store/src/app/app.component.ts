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
}
