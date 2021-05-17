import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule
  ],
  //ya que queremos volver a usar este modulo debemos exportatlo
  exports:[
    MatButtonModule
  ]
})
export class MaterialModule { }
