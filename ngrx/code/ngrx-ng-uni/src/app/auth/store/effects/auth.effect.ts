import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as AuthActions from './../actions/';
import { environment } from './../../../../environments/environment';

@Injectable()
export class AuthEffect {

  login$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.login),
      tap(action => {
        const key = environment.localStorage.user;
        const data = JSON.stringify(action.user);
        window.localStorage.setItem(key, data);
      }),
    ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(action => {
        const key = environment.localStorage.user;
        window.localStorage.removeItem(key);
        this.router.navigateByUrl('/login');
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}
}
