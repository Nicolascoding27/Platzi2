import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './componentes/banner/banner.component'
import {HomeComponent} from './componentes/home/home.component'
import {HomeRoutingModule} from './home-routing.module'
import {SharedModule} from '../shared/shared.module'
@NgModule(
    {
        declarations:[
            BannerComponent,
            HomeComponent,
        ],
        imports:[ //para todo modulo necesitamos importar una ruta. 
            CommonModule,
            HomeRoutingModule,
            SharedModule
         ]
    }
)
export class HomeModule{

}