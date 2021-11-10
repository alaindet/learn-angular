import { Pipe, PipeTransform } from '@angular/core';
import { Server } from './server.model';

@Pipe({
  name: 'sortServers'
})
export class SortServersPipe implements PipeTransform {

  private fields = ['instanceType', 'name', 'status', 'started'];
  private directions = ['asc', 'desc'];

  transform(value: Server[], field: string, direction = 'asc'): any {

    // ERROR: Invalid field
    if (this.fields.indexOf(field) === -1) {
      return value;
    }

    // ERROR: Invalid direction
    if (this.directions.indexOf(direction) === -1) {
      return value;
    }

    if (direction === 'asc') {
      return value.sort((_a: Server, _b: Server) => {
        const [a, b] = [ _a[field], _b[field] ];
        return (a === b) ? 0 : (a < b) ? -1 : 1;
      });
    } else {
      return value.sort((_a: Server, _b: Server) => {
        const [a, b] = [_a[field], _b[field]];
        return (a === b) ? 0 : (b < a) ? -1 : 1;
      });
    }

  }

}
