import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true,
})
export class UiTruncatePipe implements PipeTransform {

  transform(value: string, size: number, elision: string = ''): string {

    if (value.length <= size) {
      return value;
    }

    return value.slice(0, size) + elision;
  }
}
