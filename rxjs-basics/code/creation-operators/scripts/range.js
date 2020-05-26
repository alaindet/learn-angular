import { range } from 'rxjs';

const observer = {
  next: (val) => console.log('range:next', val),
  error: (err) => console.log('range:error', err),
  complete: () => console.log('range:complete'),
};

// of
const source$ = range(1, 5);
source$.subscribe(observer);
