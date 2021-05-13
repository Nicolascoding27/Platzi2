import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipedepipe'
})
export class PipedepipePipe implements PipeTransform {

  transform(value: number):any{
    return Math.pow(value,2);
  } //tipe of value 

}
