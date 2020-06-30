import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { environment } from '../../../environments/environment';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

const loggerMetaReducer = (reducer: ActionReducer<any>): ActionReducer => {
  return (state: AppState, action: any) => {
    console.log('I am a logging meta reduer', state, action);
    return reducer(state, action);
  };
};

const isDev = !environment.production;
export const metaReducers: MetaReducer<AppState>[] = isDev
  ? [
    loggerMetaReducer,
  ]
  : [];
