import { Component } from '@angular/core';
import {Product}from './product.model' //estamos importando el tipado para poder usarlo en el producto 

@Component({
  selector: 'app-root',
  template:'<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
