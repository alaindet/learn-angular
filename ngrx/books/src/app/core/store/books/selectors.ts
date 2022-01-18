import { createFeatureSelector } from '@ngrx/store';

import { BooksState } from './state';
import { booksFeatureName } from './feature';

export const selectBooks = createFeatureSelector<BooksState>(booksFeatureName);
