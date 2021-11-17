import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { LocalStorageService } from '@/core/services';
import { AuthApiService } from './auth.api.service';
import { LoginResponseData, User } from '../types';
// import { AuthResponseData } from '../types/auth-response-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _user$ = new BehaviorSubject<User | null>(null);
  user$ = this._user$.asObservable();

  constructor(
    private authApi: AuthApiService,
    private localStorage: LocalStorageService,
    // private http: HttpClient,
    // private router: Router,
  ) {}

  // signup(email: string, password: string) {
  //   const url = 'http://example.com';
  //   const body = { email, password };

  //   return this.http
  //     .post<AuthResponseData>(url, body)
  //     .pipe(
  //       catchError(this.handleError),
  //       tap(resData => {
  //         this.handleAuthentication(
  //           resData.email,
  //           resData.localId,
  //           resData.idToken,
  //           +resData.expiresIn
  //         );
  //       })
  //     );
  // }

  login(email: string, password: string): Observable<LoginResponseData> {
    return this.authApi.login(email, password).pipe(
      tap(response => {
        const user = new User(email, response.token);
        this._user$.next(user);

        // const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        // const user = new User(email, userId, token, expirationDate);
        // this.user.next(user);
        // this.autoLogout(expiresIn * 1000);
        // localStorage.setItem('userData', JSON.stringify(user));
      })
    );
  }

  // login(email: string, password: string) {
  //   const url = 'http://example.com';
  //   const body = { email, password };

  //   return this.http
  //     .post<AuthResponseData>(url, body)
  //     .pipe(
  //       catchError(this.handleError),
  //       tap(resData => {
  //         this.handleAuthentication(
  //           resData.email,
  //           resData.localId,
  //           resData.idToken,
  //           +resData.expiresIn
  //         );
  //       })
  //     );
  // }

  // autoLogin() {
  //   const userData: {
  //     email: string;
  //     id: string;
  //     _token: string;
  //     _tokenExpirationDate: string;
  //   } = JSON.parse(localStorage.getItem('userData'));

  //   if (!userData) {
  //     return;
  //   }

  //   const loadedUser = new User(
  //     userData.email,
  //     userData.id,
  //     userData._token,
  //     new Date(userData._tokenExpirationDate)
  //   );

  //   if (loadedUser.token) {
  //     this.user.next(loadedUser);
  //     const whenExpires = new Date(userData._tokenExpirationDate).getTime();
  //     const now = new Date().getTime();
  //     const expirationDuration = whenExpires - now;
  //     this.autoLogout(expirationDuration);
  //   }
  // }

  // logout() {
  //   this.user.next(null);
  //   this.router.navigate(['/auth']);
  //   localStorage.removeItem('userData');
  //   if (this.tokenExpirationTimer) {
  //     clearTimeout(this.tokenExpirationTimer);
  //   }
  //   this.tokenExpirationTimer = null;
  // }

  // autoLogout(expDuration: number) {
  //   this.tokenExpirationTimer = setTimeout(() => this.logout(), expDuration);
  // }

  // private handleAuthentication(
  //   email: string,
  //   userId: string,
  //   token: string,
  //   expiresIn: number
  // ) {
  //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //   const user = new User(email, userId, token, expirationDate);
  //   this.user.next(user);
  //   this.autoLogout(expiresIn * 1000);
  //   localStorage.setItem('userData', JSON.stringify(user));
  // }

  // private handleError(errorRes: HttpErrorResponse) {
  //   return of(errorRes);
  //   let errorMessage = 'An unknown error occurred!';
  //   if (!errorRes.error || !errorRes.error.error) {
  //     return throwError(errorMessage);
  //   }
  //   switch (errorRes.error.error.message) {
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'This email exists already';
  //       break;
  //     case 'EMAIL_NOT_FOUND':
  //       errorMessage = 'This email does not exist.';
  //       break;
  //     case 'INVALID_PASSWORD':
  //       errorMessage = 'This password is not correct.';
  //       break;
  //   }
  //   return throw(errorMessage);
  // }
}
