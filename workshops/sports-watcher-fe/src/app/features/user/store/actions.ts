import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { User, UserCredentials } from '../types';

export const signInActions = createActionGroup({
  source: 'User',
  events: {
    'Auto sign in': emptyProps(),
    'Sign in': props<{ credentials: UserCredentials }>(),
    'Sign in success': props<{ user: User }>(),
    'Sign in error': props<{ message: string }>(),
    'Sign out': emptyProps(),
  },
});

export const storageActions = createActionGroup({
  source: 'User',
  events: {
    'Store user': props<{ user: User }>(),
    'Fetch user': emptyProps(),
  },
});
