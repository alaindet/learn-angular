import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { UserCredentials } from '../types';

export const loginActions = createActionGroup({
  source: 'User/Login',
  events: {
    login : props<{ credentials: UserCredentials }>(),
    loginSuccess: props<{ payload: any }>(), // TODO
    loginError: props<{ error: string }>(),
    logout: emptyProps(),
  },
});
