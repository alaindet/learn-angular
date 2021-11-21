import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { CacheService, LocalStorageCacheService } from '@/core/features/cache';
import { AuthApiService } from './auth.api.service';
import { LoginResponseData } from '../types';
import { User } from '../models';

export const USER_KEY = 'user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private localStorage: LocalStorageCacheService;
  private _user$ = new BehaviorSubject<User | null>(null);
  user$ = this._user$.asObservable();

  constructor(
    private authApi: AuthApiService,
    private cache: CacheService,
    private router: Router,
  ) {
    this.localStorage = cache.localStorage;
  }

  login(email: string, password: string): Observable<LoginResponseData> {
    return this.authApi.login(email, password).pipe(
      tap(response => {
        const user = new User(email, response.token);
        this._user$.next(user);
        this.localStorage.set(USER_KEY, JSON.stringify(user));
      })
    );
  }

  autoLogin(): void {
    const rawUserData = this.localStorage.get(USER_KEY);
    if (rawUserData) {
      const userData = JSON.parse(rawUserData);
      const user = User.deserialize(userData);
      this._user$.next(user);
    }
  }

  logout(): void {
    this._user$.next(null);
    this.localStorage.delete(USER_KEY);
    this.router.navigate(['/auth']);
  }
}
