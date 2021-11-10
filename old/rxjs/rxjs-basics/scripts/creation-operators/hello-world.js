import { Observable } from 'rxjs';

import { getDummyObserver } from './../common/dummy-observer';

const observer = getDummyObserver('creationOperators:helloWorld');

const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('world');
  subscriber.complete();
});

observable.subscribe(observer);
