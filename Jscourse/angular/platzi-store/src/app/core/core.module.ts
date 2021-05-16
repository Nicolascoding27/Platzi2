import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsService} from './service/products/products.service'
import { ProductService } from '../product.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ProductService
  ]
})
export class CoreModule { }
