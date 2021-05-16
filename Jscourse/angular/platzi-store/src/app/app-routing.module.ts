import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { ProductComponent } from './product/product.component'
import {ProductsComponent} from './products/products.component'
import {ContactComponent} from './contact/contact.component'
import {DemoComponent} from './demo/demo.component'
import{PageNotFoundComponent} from './page-not-found/page-not-found.component'
import{ProductDetailsComponent} from './product-details/product-details.component'
import {LayoutComponent} from './layout/layout.component'
import {AdminGuard} from './admin.guard'
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
      path:'home', //aca importamos todo un modulo\
      loadChildren:()=>  import ('./home/home.module').then(m=>m.HomeModule)            
    },
    {
      path:'product',
      component:ProductComponent                      
    },
    {
      path:'products',
      canActivate:[AdminGuard],
      component:ProductsComponent                      
    }
    ,
    {
      path:'contact',
      canActivate:[AdminGuard],
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
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy:PreloadAllModules
    })],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Vamos a empezar a crear rutas opoque todas dirigen al mismo puerto. 