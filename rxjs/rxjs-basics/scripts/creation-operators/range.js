import { range } from 'rxjs';

import { getDummyObserver } from './../common/dummy-observer';

const observer = getDummyObserver('creationOperators:range');

// of
const source$ = range(1, 5);
source$.subscribe(observer);
