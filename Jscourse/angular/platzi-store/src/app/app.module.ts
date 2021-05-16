import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductComponent} from './product/product.component';
import { CartComponent } from './cart/cart.component';
import {ProductsComponent}from './products/products.component';
import { DemoComponent } from './demo/demo.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from './shared/shared.module'
import {CoreModule} from './core/core.module'
//Importo el componente para poder hacer uso de e'
//Lo deobo poner en declarations para que angular lo reconozca 
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductsComponent,
    DemoComponent,
    ContactComponent,
    PageNotFoundComponent,
    TestComponent,
    ProductDetailsComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,///buena practioca 
    FormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
