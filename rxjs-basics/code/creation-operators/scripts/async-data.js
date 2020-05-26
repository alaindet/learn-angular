import { Observable } from 'rxjs';

const observer = {
  next: (val) => console.log('async-data:next', val),
  error: (err) => console.log('async-data:error', err),
  complete: () => console.log('async-data:complete'),
};

const observable$ = new Observable(subscriber => {
  let count = 0;

  const id = setInterval(() => {
    subscriber.next(count);
    subscriber.complete();
    count += 1;
  }, 1000);

  return () => {
    console.log('called');
    clearInterval(id);
  };
});

console.log('before');
observable$.subscribe(observer);
console.log('after');
