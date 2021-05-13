import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  power:number = null;
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
  ///---Metodo para recibir y hacer uso del @output
  clickProduct(id){ //recordar que recibo id
    console.log('product');
    console.log(id)//ahora enviamos al app-component.html para usarlo
  }
  constructor() { }

  ngOnInit(): void {
  }
  //Vamos a recorrer un objeto que almacena las imagenes 

}
