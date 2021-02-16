import { Action, ActionReducer } from '@ngrx/store';

import { AppState } from '../state';
import { CounterAction } from '../actions';

export const counterReducer: ActionReducer<AppState['counter'], Action> = (
  state: AppState['counter'] = 0,
  action: Action,
) => {
  switch (action.type) {
    case CounterAction.Increment:
      return state + 1;
    case CounterAction.Decrement:
      return state - 1;
    default:
      return state;
  }
};
