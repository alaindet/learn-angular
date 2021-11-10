import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string | Array<any>): string | Array<any> {

    if (typeof value === 'string') {
      return value.split('').reverse().join('');
    }

    if (value instanceof Array) {
      return value.reverse();
    }

    return value;

  }

}
