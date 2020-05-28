import { from, interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

const nums = [1,2,3,4,5];

const totalReducer = (tot, i) => tot + i;

interval(1000).pipe(
  take(3),
  reduce(totalReducer, 0)
).subscribe(console.log, console.log, console.log);
