import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AuthEffect {

  constructor(
    private actions$: Actions,
  ) {
    actions$.subscribe(action => {
      if (action.type === '[Login Page] User Login') {
        console.log('AuthEffect taking place...');
        window.localStorage.setItem('user', JSON.stringify(action['user']));
      }
    });
  }
}
