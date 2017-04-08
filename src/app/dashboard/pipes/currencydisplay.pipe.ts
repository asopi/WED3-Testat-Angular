import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencydisplay'
})
export class CurrencydisplayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value){
      return '';
    }
    return value.toFixed(2) + " CHF";
  }
}
