import { Observable } from 'rxjs';

const observer = {
  next: (val) => console.log('async-data:next', val),
  error: (err) => console.log('async-data:error', err),
  complete: () => console.log('async-data:complete'),
};

const observable$ = new Observable(subscriber => {
  let count = 0;
  setInterval(() => subscriber.next(count++), 1000);
});

const sub = observable$.subscribe(observer);

setTimeout(() => sub.unsubscribe(), 3000);
