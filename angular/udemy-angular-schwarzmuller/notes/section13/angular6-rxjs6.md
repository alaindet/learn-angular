# How to update?

- This
  ```
  import { Observable } from 'rxjs/Observable'
  import { Subject } from 'rxjs/Subject'
  ```
  becomes
  ```
  import { Observable, Subject } from 'rxjs'
  ```

- This
  ```
  import 'rxjs/add/operator/map'
  import 'rxjs/add/operator/take'
  ```
  becomes
  ```
  import { map, take } from 'rxjs/operators'
  ```

- This
  ```
  import 'rxjs/add/observable/of'
  import { of } from 'rxjs/observable/of' // Or this
  ```
  ```
  import { of } from 'rxjs'
  ```

- This
  ```
  import 'rxjs/add/operator/map'
  
  myObservable
    .map(data => data * 2)
    .subscribe(...);
  ```
  ```
  import { map } from 'rxjs/operators';
  
  myObservable
    .pipe(map(data => data * 2))
    .subscribe(...);
  ```

- The new `pipe()` takes an infinite number of operators
  ```
  import { map, switchMap, throttle } from 'rxjs/operators';
  
  myObservable
    .pipe(map(data => data * 2), switchMap(...), throttle(...))
    .subscribe(...);
  ```

- These operators were renamed as follows
  - `catch()` => `catchError()`
  - `do()` => `tap()`
  - `finally()` => `finalize()`
  - `switch()` => `switchAll()`
  - `throw()` => `throwError()`
  - `fromPromise()` => `from()`


# Reference
- https://www.academind.com/learn/javascript/rxjs-6-what-changed/
