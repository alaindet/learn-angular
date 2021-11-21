import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '@/core/features/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  isAuthenticated = false;
  private subs: { [sub: string]: Subscription } = {};

  constructor(
    public authService: AuthService,
  ) {}

  onLogout(): void {
    this.authService.logout();
  }
}
