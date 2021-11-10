import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');

const keycode$ = keyup$.pipe(
  map(event => event.code)
);

const enter$ = keycode$.pipe(
  filter(code => code === 'Enter')
);

enter$.subscribe(console.log);
keycode$.subscribe(console.log);
