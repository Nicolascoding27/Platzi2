import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './componentes/home/home.component';
const routes:Routes=[
    {
        path: '',
        component:HomeComponent
    }
];//tipada como routes y es un array vacio
//este modulo lo vamos a usar dentro de home-module por eso despues lo importamos alli
@NgModule({
    imports :[
        RouterModule.forChild(routes),//rutas en especifico
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule{

}
