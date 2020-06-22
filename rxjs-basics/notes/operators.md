# RxJS operators

- The `reduce` operator acts as `Array.prototype.reduce` but for events and it will **ONLY TRIGGER UPON COMPLETION**, meaning this code will never show the sum since there's no completion

```js
import { interval } from 'rxjs';
import { reduce } from 'rxjs/operators';

interval(1000)
  .pipe(
    reduce((tot, i) => tot + i, 0)
  )
  .subscribe({
    complete: () => console.log
  });
```

However, this will work, because the `take` operator completes the piped observable

```js
import { interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';


interval(1000)
  .pipe(
    take(3),
    reduce((tot, i) => tot + i, 0)
  )
  .subscribe({
    complete: () => console.log
  });
```
