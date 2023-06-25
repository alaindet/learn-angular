import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { User, UserCredentials } from '../types';

export const signInActions = createActionGroup({
  source: 'User',
  events: {
    signIn: props<{ credentials: UserCredentials }>(),
    signInSuccess: props<{ user: User }>(),
    signInError: props<{ message: string }>(),
    signOut: emptyProps(),
  },
});

export const storageActions = createActionGroup({
  source: 'User',
  events: {
    storeUser: props<{ user: User }>(),
    fetchUser: emptyProps(),
  },
});
