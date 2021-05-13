import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product.component'
import {HomeComponent} from './home/home.component'
import {ProductsComponent} from './products/products.component'
import {ContactComponent} from './contact/contact.component'
// import {} from './home'
const routes: Routes = [
{
  path:'home',
  component:HomeComponent                      
},
{
  path:'product',
  component:ProductComponent                      
},
{
  path:'products',
  component:ProductsComponent                      
}
,
{
  path:'contact',
  component:ContactComponent                    
}
];//aca ponemos las rutas 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Vamos a empezar a crear rutas opoque todas dirigen al mismo puerto. 