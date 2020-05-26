import { of } from 'rxjs';

const observer = {
  next: (val) => console.log('of:next', val),
  error: (err) => console.log('of:error', err),
  complete: () => console.log('of:complete'),
};

// of
const source$ = of(1, 2, 3, 4, 5);
source$.subscribe(observer);
