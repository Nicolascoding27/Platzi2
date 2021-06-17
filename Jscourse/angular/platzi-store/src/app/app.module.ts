import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DemoComponent } from './demo/demo.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from './shared/shared.module'
import {CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import{HttpClientModule} from '@angular/common/http'
//Importo el componente para poder hacer uso de e'
//Lo deobo poner en declarations para que angular lo reconozca 
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    DemoComponent,
    ContactComponent,
    PageNotFoundComponent,
    TestComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,///buena practioca 
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
