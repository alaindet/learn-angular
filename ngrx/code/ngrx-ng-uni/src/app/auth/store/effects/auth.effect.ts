import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as AuthActions from './../actions/';

@Injectable()
export class AuthEffect {

  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.login),
        tap(action => {
          const key = 'app:user';
          const data = JSON.stringify(action.user);
          window.localStorage.setItem(key, data);
        }),
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
  ) {}
}
