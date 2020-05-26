import { timer } from 'rxjs';

import { getDummyObserver } from './../common/dummy-observer';

const [delay, interval] = [1000, 500];

// timer (once, after delay)
const delayed$ = timer(delay);
delayed$.subscribe(
  getDummyObserver('creationOperators:timer(delay)')
);

// timer (starts after delay, then fires at regular intervals)
const delayedInterval$ = timer(delay, interval);
const sub = delayedInterval$.subscribe(
  getDummyObserver('creationOperators:timer(delay, interval)')
);

setTimeout(() => sub.unsubscribe(), 5000);
