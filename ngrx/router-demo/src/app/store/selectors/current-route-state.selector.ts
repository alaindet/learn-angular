import { createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { getRouterState } from './router-state.selector';

export const getCurrentRouteState = createSelector(
  getRouterState,
  (state: RouterReducerState) => state.state,
);
