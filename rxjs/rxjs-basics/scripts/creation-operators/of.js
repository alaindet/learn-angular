import { of } from 'rxjs';

import { getDummyObserver } from './../common/dummy-observer';

const observer = getDummyObserver('creationOperators:of');

// of
const source$ = of(1, 2, 3, 4, 5);
source$.subscribe(observer);
