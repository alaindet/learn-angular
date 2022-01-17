import { createFeatureSelector } from '@ngrx/store';

import { BooksState } from './state';
import { featureName } from './feature';

export const selectBooks = createFeatureSelector<BooksState>(featureName);
