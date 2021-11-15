import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '@/features/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private subs: { [sub: string]: Subscription } = {};

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.subs.user = this.authService.user
      .subscribe(user => this.isAuthenticated = !!user);
  }

  ngOnDestroy(): void {
    this.subs.user.unsubscribe();
  }

  onLogout(): void {
    this.authService.logout();
  }

  onSaveData(): void {
    // ...
  }

  onFetchData(): void {
    // ...
  }
}
