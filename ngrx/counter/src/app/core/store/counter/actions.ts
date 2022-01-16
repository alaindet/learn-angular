import { createAction, props } from '@ngrx/store';

export const increase = createAction(
  '[Counter Component] Increase',
);

export const increaseByAmount = createAction(
  '[Counter Component] Increase by amount',
  props<{ amount: number }>(),
);

export const decrease = createAction(
  '[Counter Component] Decrease',
);

export const decreaseByAmount = createAction(
  '[Counter Component] Decrease by amount',
  props<{ amount: number }>(),
);
