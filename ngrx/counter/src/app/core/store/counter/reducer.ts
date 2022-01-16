import { createReducer, on } from '@ngrx/store';

import {
  increase,
  increaseByAmount,
  decrease,
  decreaseByAmount,
} from './actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => state + 1),
  on(increaseByAmount, (state, action) => state + action.amount),
  on(decrease, (state) => state - 1),
  on(decreaseByAmount, (state, action) => state - action.amount),
);
