import { Action } from './models/action';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: 'Eat pizza', complete: false }],
};

export function reducer(state = initialState, action: Action) {

  return state;
}
