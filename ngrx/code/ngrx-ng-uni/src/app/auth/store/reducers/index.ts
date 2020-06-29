import {
  Action,
  ActionReducerMap,
  createReducer,
  on
} from '@ngrx/store';

import { User } from './../../model/user.model';
import * as AuthActions from './../actions';

export interface AuthState {
  user: User,
}

export const initialAuthState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(
    AuthActions.login,
    (state: AuthState, action: any) => {
      return {
        user: action.user,
      };
    }
  )
);
