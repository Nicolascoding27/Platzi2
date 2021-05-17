import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipedepipePipe } from './pipes/pipedepipe/pipedepipe.pipe';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router'
import { FooterComponent } from './components/footer/footer.component';
import {MaterialModule} from '../material/material.module'
@NgModule({
  declarations: [
    PipedepipePipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, //este modulo tiene ngfor, ngif
    RouterModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
