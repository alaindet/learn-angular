import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { AuthData } from './../models/auth-data.model';
import { User } from './../models/user.model';

@Injectable()
export class AuthService {

  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  private user: User;

  constructor(
    private router: Router,
  ) {}

  registerUser(authData: AuthData) {
    this.user = {
      id: Math.round(Math.random() * 10000).toString(), // TODO
      email: authData.email,
    };
    this.isAuthenticated$.next(true);
    this.router.navigate(['/training']);
  }

  login(authData: AuthData) {
    this.user = {
      id: Math.round(Math.random() * 10000).toString(), // TODO
      email: authData.email,
    };
    this.isAuthenticated$.next(true);
    this.router.navigate(['/training']);
  }

  logout() {
    this.user = null;
    this.isAuthenticated$.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }
}
