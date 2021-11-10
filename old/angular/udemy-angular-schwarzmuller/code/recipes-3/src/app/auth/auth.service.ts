import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
interface ApiSignUpResponse {
  idToken: string;	// A Firebase Auth ID token for the newly created user.
  email: string;	// The email for the newly created user.
  refreshToken: string;	// A Firebase Auth refresh token for the newly created user.
  expiresIn: string;	// The number of seconds in which the ID token expires.
  localId: string;	// The uid of the newly created user.
}

// https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
interface ApiSignInResponse {
  idToken: string;	// A Firebase Auth ID token for the authenticated user.
  email: string;	// The email for the authenticated user.
  refreshToken: string; // A Firebase Auth refresh token for the authenticated user.
  expiresIn: string; // The number of seconds in which the ID token expires.
  localId: string;	// The uid of the authenticated user.
  registered: boolean;	// Whether the email is for an existing account.
}

interface CustomError {
  message: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private apiKey = 'AIzaSyACFNjS0ueRulMDh8Ut-B6UeLhr4JDi5gs';

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Registers a new user into the Firebase project
   *
   * @param email The user's email
   * @param password The user's password
   * @return Observable<ApiSignUpResponse|string>
   */
  signUp(email: string, password: string): Observable<ApiSignUpResponse | CustomError> {

    const url = (
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp' +
      `?key=${this.apiKey}`
    );

    const data = {
      email,
      password,
      returnSecureToken: true
    };

    // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
    return this.http.post<ApiSignUpResponse | CustomError>(url, data).pipe(
      catchError((response: any): Observable<CustomError> => {

        let message = 'An error occurred.';

        if (!response.error || !response.error.error) {
          return throwError(message);
        }

        const errorKey = response.error.error.message;

        switch (errorKey) {
          case 'EMAIL_NOT_FOUND':
            message = 'There is no user record corresponding to this identifier. The user may have been deleted.';
            break;
          case 'INVALID_PASSWORD':
            message = 'The password is invalid or the user does not have a password.';
            break;
          case 'USER_DISABLED':
            message = 'The user account has been disabled by an administrator.';
            break;
        }

        const error = { message };

        return throwError(error);

      })
    );
  }

  signIn(email: string, password: string): Observable<ApiSignInResponse | CustomError> {

    const url = (
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword' +
      `?key=${this.apiKey}`
    );

    const data = {
      email,
      password,
      returnSecureToken: true
    };

    // https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
    return this.http.post<ApiSignInResponse | CustomError>(url, data).pipe(
      catchError((response: any): Observable<CustomError> => {

        let message = 'An error occurred.';

        if (!response.error || !response.error.error) {
          return throwError(message);
        }

        const errorKey = response.error.error.message;

        switch (errorKey) {
          case 'EMAIL_EXISTS':
            message = 'The email address is already in use by another account.';
            break;
          case 'OPERATION_NOT_ALLOWED':
            message = 'Password sign-in is disabled for this project.';
            break;
          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            message = 'We have blocked all requests from this device due to unusual activity.Try again later.';
            break;
        }

        const error = { message };

        return throwError(error);

      })
    );

  }

}
