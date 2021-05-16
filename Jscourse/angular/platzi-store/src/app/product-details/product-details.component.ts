import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ProductsService} from '../core/service/products/products.service';
import {Product} from '../product.model'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  //necesitamos crear una variable publica que almacene a los productos
  product:Product;
  constructor (
    private route : ActivatedRoute,
    private productservice:ProductsService,
    ) 
   {}                    

  ngOnInit():    void {
    this.route.params.subscribe((params:Params)=>{
    const id =params.id
    this.product=this.productservice.getProduct(id)
      // console.log(id)// eliminando el objeto json 
      //cuando es vacio me genera undefined
    });
  }

}
