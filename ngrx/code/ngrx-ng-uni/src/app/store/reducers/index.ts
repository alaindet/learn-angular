import { ActionReducerMap, MetaReducer, ActionReducer, Action } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { environment } from '../../../environments/environment';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

const loggerMetaReducer = (reducer: ActionReducer<any>): ActionReducer<AppState, Action> => {
  return (state: AppState, action: Action) => {
    console.log('Meta reducer logging', state, action);
    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [
  loggerMetaReducer,
] : [];
