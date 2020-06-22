import { Action } from './models/action';
import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [
    { label: 'Eat pizza', complete: false }
  ],
};

export function reducer(state = initialState, action: Action) {

  switch (action.type) {

    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];
      return { ...state, data };
    }

    case fromActions.REMOVE_TODO: {
      const todo = action.payload;
      const data = state.data.filter(item => item.label !== todo.label);
      return { ...state, data };
    }
  }

  return state;
}
