import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeNumber'
})
export class TimeNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value !== undefined && value !== null) {
      return value >= 10 ? value.toString() : '0' + value.toString();
    } else {
      return '';
    }
  }

}
