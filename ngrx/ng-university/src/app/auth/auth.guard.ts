import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { AppState } from './../store/reducers';
import { isLoggedIn } from './../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    return this.store.pipe(
      select(isLoggedIn),
      tap((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }
}
