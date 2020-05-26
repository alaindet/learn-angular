import { from } from 'rxjs';

const source$ = from([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);

const ns = 'gettingStarted:usingCallbacks';
const onNext = (val) => console.log(`${ns}:next`, val);
const onError = (error) => console.log(`${ns}:error`, error);
const onComplete = () => console.log(`${ns}:complete`);

source$.subscribe(onNext, onError, onComplete);
