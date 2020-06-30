import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState } from './store/reducers';
import * as AuthActions from './auth/store/actions';
import { isLoggedIn, isLoggedOut } from './store/selectors';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  loading = true;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  subs: { [sub: string]: Subscription } = {};

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.tryReadUserFromLocalStorage();
    this.bindLoadingToRouterEvents();
    this.bindAuthLinksVisibilityToStore();
  }

  ngOnDestroy() {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  private tryReadUserFromLocalStorage() {
    const key = environment.localStorage.user;
    const userStorage = window.localStorage.getItem(key);
    if (userStorage) {
      const user = JSON.parse(userStorage);
      this.store.dispatch(AuthActions.login({ user }))
    }
  }

  private bindLoadingToRouterEvents() {
    this.subs['router-events'] = this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        this.loading = true;
        return;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
        return;
      }

    });
  }

  private bindAuthLinksVisibilityToStore() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }
}
