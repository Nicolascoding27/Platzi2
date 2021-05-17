import {ProductsComponent} from './components/products/products.component'
import {ProductComponent} from './components/product/product/product.component'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import{ProductsRouting} from './products-routing.module'
import {ProductDetailsComponent} from './components/product-details/product-details.component'
//Voy a usar el boton de material aca por eso lo importo
import{MaterialModule} from '../material/material.module'
@NgModule(
    {
    declarations:[
        ProductComponent,
        ProductsComponent,
        ProductDetailsComponent
    ],
    imports:[
        CommonModule,
        ProductsRouting,
        MaterialModule //ya puedo usar material button
    ]
  }
)
export class ProductModule{

}