import { Injectable } from '@angular/core';
import {Product} from '../../../product.model'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Product[] = [ //el tipado 'proteje nuestro codigo'
  //lo unico que tenemos que importar aca es el tipado
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
  constructor() { }
  //vamos a creaar un metodo que me devuelva todos los productos. 
  getAllProducts(){
    return this.products
  }
  getProduct(id:string){
    return this.products.find(item =>id===item.id)
  }//tipamos la variable
}
