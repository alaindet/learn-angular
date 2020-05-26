import { from } from 'rxjs';

const observer = {
  next: (val) => console.log('from:next', val),
  error: (err) => console.log('from:error', err),
  complete: () => console.log('from:complete'),
};

// from
const arrayItems$ = from([1, 2, 3]);
const stringLetters$ = from ('Hello');
const fetchedData$ = from(fetch('https://api.github.com/users/octocat'));

arrayItems$.subscribe(observer);
stringLetters$.subscribe(observer);
fetchedData$.subscribe(observer);
