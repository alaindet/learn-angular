import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appEncodeUri',
  pure: true,
})
export class EncodeUriPipe implements PipeTransform {
  transform(value: string): string {
    return encodeURI(value);
  }
}
