import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toConsole'
})
export class ToConsolePipe implements PipeTransform {

  transform(value: any, message?: string): any {
    if (typeof message !== 'undefined') {
      console.log(message);
    }
    console.log(value);
    return value;
  }

}
