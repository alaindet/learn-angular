import { from } from 'rxjs';

const source$ = from(['6x9', '=', '42']);

source$.subscribe(
  val => console.log('using-callbacks:next', val),
  error => console.log('using-callbacks:error', error),
  () => console.log('using-callbacks:complete')
);
