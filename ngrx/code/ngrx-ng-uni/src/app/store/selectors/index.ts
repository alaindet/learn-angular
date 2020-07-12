import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AuthState } from './../../auth/store/reducers/index';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn
);
