import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthData } from './../models/auth-data.model';
import { User } from './../models/user.model';

@Injectable()
export class AuthService {

  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  private user: User;

  registerUser(authData: AuthData) {
    this.user = {
      id: Math.round(Math.random() * 10000).toString(), // TODO
      email: authData.email,
    };
    this.isAuthenticated$.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      id: Math.round(Math.random() * 10000).toString(), // TODO
      email: authData.email,
    };
    this.isAuthenticated$.next(true);
  }

  logout() {
    this.user = null;
    this.isAuthenticated$.next(false);
  }

  getUser() {
    return { ...this.user };
  }
}
