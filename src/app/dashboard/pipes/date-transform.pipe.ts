import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform', pure: true
})
export class DateTransformPipe implements PipeTransform {

  transform(date: Date, args?: any): any {
    return date.toLocaleString();
  }

}
