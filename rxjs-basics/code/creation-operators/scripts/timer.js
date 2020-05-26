import { timer } from 'rxjs';


const delay = 1000;
const interval = 500;

// timer (once, after delay)
const delayed$ = timer(delay);
delayed$.subscribe({
  next: (val) => console.log('timer:next', val),
  error: (err) => console.log('timer:error', err),
  complete: () => console.log('timer:complete'),
});

// timer (starts after delay, then fires at regular intervals)
const delayedInterval$ = timer(delay, interval);
const sub = delayedInterval$.subscribe({
  next: (val) => console.log('timer-delayed:next', val),
  error: (err) => console.log('timer-delayed:error', err),
  complete: () => console.log('timer-delayed:complete'),
});

setTimeout(() => {
  sub.unsubscribe();
}, 5000);
