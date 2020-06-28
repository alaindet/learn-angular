import { createSelector } from '@ngrx/store';

import { AppState } from './../reducers/index';

export const isLoggedIn = createSelector(
  (state: AppState) => state['auth'],
  (auth) => !!auth.user,
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn
);
