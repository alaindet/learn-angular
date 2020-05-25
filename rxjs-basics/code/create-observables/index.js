import { fromEvent, of, range, from, interval, timer } from 'rxjs';

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete'),
}

// // fromEvent
// const source$ = fromEvent(document, 'click');
// source$.subscribe(observer);

// // of
// const source$ = of(1, 2, 3, 4, 5);
// source$.subscribe(observer);

// // range
// const source$ = range(1, 5);
// source$.subscribe(observer);

// // from
// const arrayItems$ = from([1, 2, 3]);
// const stringLetters$ = from ('Hello');
// const fetchedData$ = from(fetch('https://api.github.com/users/octocat'));

// arrayItems$.subscribe(observer);
// stringLetters$.subscribe(observer);
// fetchedData$.subscribe(observer);

// // interval
// const timer$ = interval(1000);
// timer$.subscribe(observer);

// // timer
// const timer$ = timer(2000);
// timer$.subscribe(observer);
