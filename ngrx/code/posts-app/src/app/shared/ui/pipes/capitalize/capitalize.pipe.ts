import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  pure: true,
})
export class UiCapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase() + value.slice(1);
  }
}
