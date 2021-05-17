import {Routes,RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'
import {ProductComponent} from './components/product/product/product.component'
import {ProductsComponent} from './components/products/products.component'
import{ProductDetailsComponent} from './components/product-details/product-details.component'
import {AdminGuard} from '../admin.guard'
    const routes:Routes=[
        {
            path: '',
            component: ProductsComponent
          },
          {
            path: ':id',
            component: ProductDetailsComponent
          }
        ];
        @NgModule({
            imports :[
                RouterModule.forChild(routes),//rutas en especifico
            ],
            exports: [
                RouterModule
            ]
        })
        export class ProductsRouting{

        }
