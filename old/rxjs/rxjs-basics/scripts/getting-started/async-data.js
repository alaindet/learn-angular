import { Observable } from 'rxjs';

import { getDummyObserver } from './../common/dummy-observer';

const observer = getDummyObserver('gettingStarted:asyncData');

const observable$ = new Observable(subscriber => {
  let count = 0;
  setInterval(() => subscriber.next(count++), 1000);
});

const sub = observable$.subscribe(observer);

setTimeout(() => sub.unsubscribe(), 3000);
