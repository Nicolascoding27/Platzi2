import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product.component'
import {HomeComponent} from './home/home.component'
import {ProductsComponent} from './products/products.component'
import {ContactComponent} from './contact/contact.component'
import {DemoComponent} from './demo/demo.component'
import{PageNotFoundComponent} from './page-not-found/page-not-found.component'
import{ProductDetailsComponent} from './product-details/product-details.component'
import {LayoutComponent} from './layout/layout.component'
const routes: Routes = [
{
  path: '',
  component:LayoutComponent,
  children:[
    {
    path: '',
    redirectTo:'/home',
    pathMatch:'full',
    },
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
    },
    {
      path:'products/:id',//si le mando un id 
      component:ProductDetailsComponent                  
    }
  ] //componentes hijos que van a recibir el layout
}, 
{
  path:'demo',
  component:DemoComponent                     
},
{
  path:'**',
  component:PageNotFoundComponent
},
];//aca ponemos las rutas 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Vamos a empezar a crear rutas opoque todas dirigen al mismo puerto. 