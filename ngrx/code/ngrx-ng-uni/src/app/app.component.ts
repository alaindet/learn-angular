import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from './store/reducers';

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
    this.bindLoadingToRouterEvents();
    this.bindAuthLinksVisibilityToStore();
  }

  ngOnDestroy() {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  logout() {
    console.log('logout');
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

    this.isLoggedIn$ = this.store.pipe(
      map((state: AppState) => !!state['auth'].user)
    );

    this.isLoggedOut$ = this.store.pipe(
      map((state: AppState) => !state['auth'].user)
    );
  }
}
