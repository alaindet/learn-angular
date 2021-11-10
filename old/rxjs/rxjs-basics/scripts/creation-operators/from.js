import { from } from 'rxjs';

import { getDummyObserver } from './../common/dummy-observer';

const observer = getDummyObserver('creationOperators:from');

// from
const arrayItems$ = from([1, 2, 3]);
const stringLetters$ = from ('Hello');
const fetchedData$ = from(fetch('https://api.github.com/users/octocat'));

arrayItems$.subscribe(observer);
stringLetters$.subscribe(observer);
fetchedData$.subscribe(observer);
