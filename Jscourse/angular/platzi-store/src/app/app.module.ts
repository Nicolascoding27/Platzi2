import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ProductComponent} from './components/product.component';
import { CartComponent } from './cart/cart.component';
import { PipedepipePipe } from './pipedepipe.pipe';
import { HighlightDirective } from './highlight.directive' ;
import {ProductsComponent}from './products/products.component'
import { from } from 'rxjs';
import { DemoComponent } from './demo/demo.component';
//Importo el componente para poder hacer uso de e'
//Lo deobo poner en declarations para que angular lo reconozca 
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    PipedepipePipe,
    HighlightDirective,
    ProductsComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,///buena practioca 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
