import { Observable } from 'rxjs';

const observer = {
  next: (value) => console.log('next', value),
  error: (error) => console.log('error', error),
  complete: () => console.log('complete'),
};

const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('world');
  // subscriber.error('Something unexpected happened');
  subscriber.complete();
});

observable.subscribe(observer);
