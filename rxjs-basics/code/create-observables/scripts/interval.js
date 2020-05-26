import { interval } from 'rxjs';

const observer = {
  next: (val) => console.log('interval:next', val),
  error: (err) => console.log('interval:error', err),
  complete: () => console.log('interval:complete'),
};

// interval
const timer$ = interval(1000);
const sub = timer$.subscribe(observer);

setTimeout(() => {
  sub.unsubscribe();
}, 5000);
