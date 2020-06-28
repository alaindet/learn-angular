import {
  Action,
  ActionReducerMap,
  createReducer,
  on
} from '@ngrx/store';

import { User } from './../../model/user.model';
import { AuthActions } from './../actions';

export interface AuthState {
  user: User,
}

export const initialAuthState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login,
    (state: AuthState, action: any) => {
      return {
        user: action.user,
      };
    }
  ),

  on(AuthActions.logout,
    (state: AuthState, action: any) => {
      return {
        user: null,
      }
    }
  )
);
