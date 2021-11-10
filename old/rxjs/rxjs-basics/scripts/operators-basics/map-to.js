import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');

const pressed$ = keyup$.pipe(mapTo('A key was pressed!'));

pressed$.subscribe(console.log);
