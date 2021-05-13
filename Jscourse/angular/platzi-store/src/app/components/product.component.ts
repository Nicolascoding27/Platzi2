//Importando el tipado 
import {Product}from '../product.model' ///Ordenar inputs con enter 
import {Component,
    Input,
    Output,
    EventEmitter,
    OnChanges, 
    SimpleChange,
    SimpleChanges, 
    OnInit,
    DoCheck} from '@angular/core'  //Un decorador es la manera en que angular sabe que rol cumplira esta clase 
//Importamos el decorador component para hacer uso de el debemos llamrlo
//Con @--estos componentes tienen metadata
@Component ({
    selector:'app-product',
    templateUrl:'./product.component.html',
    styleUrls: ['./product.component.scss']
})//template hace referencia a que archivo html vamos a llamar 

//---PASOS---- 1. IMPORTAR EL DECORADOR
//2. LLAMAR EL DECORADOR Y CONFIGURAR METADATA
//3. CREAR HTML PARA USARLO EN EL DATO templateUrl
//4. Crear la clase para el componente \
//5. Importar en app.module.ts para hacer uso de el a nivel global 
//6. En app.module Agregar en declarations el componente que acabamos de crear
export class ProductComponent implements OnInit,DoCheck{ //We need to export this component
    //Dandole mas contexto al componente
   @Input() product:Product; //recive datos desde el componente padre
   @Output()  productClicked:EventEmitter<any> = new EventEmitter();//sacar dato al componente padre 
   //Tengo que inicializar el event emite
   //Con el dos puntos solo ponemos el tipo pero no asignamos ningun valor 
   ///-Creacion del constructor----//
   constructor(){
       console.log('1. constructor');
   }
   ///-Creacion del metodo Onchanges----//
//    ngOnChanges(changes:SimpleChanges){ //detectar cambios
//     console.log(`2.ngOnChanges`)
//    }
   ngOnInit(){
    console.log('3.ngOnInit')
    }
    ngDoCheck(){
        console.log('4.Docheck')//Forma de dtectar cambios
    }
   addCart(){
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id)//product clicked es el que me permite emitir el evento
    //vamos a mandar los productos,necesitamos rescatarlo en el componente padre
    //vamos al html y ponemos parenrtesis
    //---Creacion del metodo Oninit----- 
    
}
 }//ES UNA CLASE POR ESO NO PONGO EL ARRAY DESPUES DE PRODUCT 