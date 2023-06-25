import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

import { createUiController } from '@app/core/store/ui';
import { UserService } from '../services';
import { signInActions } from './actions';

@Injectable()
export class UserEffects {

  private actions = inject(Actions);
  private router = inject(Router);
  private userService = inject(UserService);
  private ui = createUiController(this.actions);

  signIn$ = createEffect(() => this.actions.pipe(
    ofType(signInActions.signIn),
    switchMap(({ credentials }) => this.userService.signIn(credentials).pipe(
      map(user => signInActions.signInSuccess({ user })),
      catchError(({ message }) => of(signInActions.signInError({ message }))),
    )),
  ));

  onSignIn$ = createEffect(() => this.actions.pipe(
    ofType(signInActions.signInSuccess),
    tap(({ user }) => this.userService.saveToStorage(user)),
    tap(() => this.router.navigate(['/'])),
  ), { dispatch: false });

  onSignOut$ = createEffect(() => this.actions.pipe(
    ofType(signInActions.signOut),
    tap(() => this.userService.clearStorage()),
    tap(() => this.router.navigate(['/signin'])),
  ), { dispatch: false });

  startLoader$ = this.ui.startLoaderOn(
    signInActions.signIn,
  );

  stopLoader$ = this.ui.stopLoaderOn(
    signInActions.signInSuccess,
    signInActions.signInError,
  );

  showError$ = this.ui.showErrorOn(
    signInActions.signInError,
  );
}

export const USER_FEATURE_EFFECTS = [
  UserEffects,
];
