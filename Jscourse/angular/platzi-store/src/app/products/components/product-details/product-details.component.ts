import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ProductsService} from '../../../core/service/products/products.service'
import {Product} from '../../../product.model'
import { Inject } from '@angular/core';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})


// @Inject('url') private url: string;
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
    console.log(id)
    // this.product=this.productservice.getProduct(id)
      // console.log(id)// eliminando el objeto json 
      //cuando es vacio me genera undefined
    this.fetchProduct(id);
    });
  }
  fetchProduct(id:string){
    this.productservice.getProduct(id).subscribe(product=>
      {
        this.product=product;
      });
  }
}
