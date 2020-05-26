import { fromEvent } from 'rxjs';

const observer = {
  next: (val) => console.log('from:next', val),
  error: (err) => console.log('from:error', err),
  complete: () => console.log('from:complete'),
};

// fromEvent
const source$ = fromEvent(document, 'click');
source$.subscribe(observer);
