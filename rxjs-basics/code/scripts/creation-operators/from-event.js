import { fromEvent } from 'rxjs';

import { getDummyObserver } from './../common/dummy-observer';

const observer = getDummyObserver('creationOperators:fromEvent');

// fromEvent
const source$ = fromEvent(document, 'click');
source$.subscribe(observer);
