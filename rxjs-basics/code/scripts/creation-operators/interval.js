import { interval } from 'rxjs';

import { getDummyObserver } from './../common/dummy-observer';

const observer = getDummyObserver('creationOperators:interval');

// interval
const timer$ = interval(1000);
const sub = timer$.subscribe(observer);

setTimeout(() => sub.unsubscribe(), 5000);
