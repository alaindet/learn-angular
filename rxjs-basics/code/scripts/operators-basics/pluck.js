import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');

const keycode$ = keyup$.pipe(pluck('code'));
keycode$.subscribe(console.log);

const nodeName$ = keyup$.pipe(pluck('target', 'nodeName'));
nodeName$.subscribe(console.log);
