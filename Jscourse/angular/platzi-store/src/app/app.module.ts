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
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
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
    DemoComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ContactComponent,
    PageNotFoundComponent,
    TestComponent,
    ProductDetailsComponent,
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
