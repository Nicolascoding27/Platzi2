//Importando el tipado 
import {Product}from '../product.model'
import {Component,Input,Output,EventEmitter} from '@angular/core'  //Un decorador es la manera en que angular sabe que rol cumplira esta clase 
//Importamos el decorador component para hacer uso de el debemos llamrlo
//Con @--estos componentes tienen metadata
@Component ({
    selector:'app-product',
    templateUrl:'./product.component.html' 
})//template hace referencia a que archivo html vamos a llamar 

//---PASOS---- 1. IMPORTAR EL DECORADOR
//2. LLAMAR EL DECORADOR Y CONFIGURAR METADATA
//3. CREAR HTML PARA USARLO EN EL DATO templateUrl
//4. Crear la clase para el componente \
//5. Importar en app.module.ts para hacer uso de el a nivel global 
//6. En app.module Agregar en declarations el componente que acabamos de crear
export class ProductComponent{ //We need to export this component
    //Dandole mas contexto al componente
   @Input() product:Product; //recive datos desde el componente padre
    @Output()  productClicked:EventEmitter<any>;//sacar dato al componente padre 
    addCart(){
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
 }//ES UNA CLASE POR ESO NO PONGO EL ARRAY DESPUES DE PRODUCT 