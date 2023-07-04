import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Auth, User, UserCredential, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Observable, from, of, switchMap, throwError } from 'rxjs';

import { UserCredentials } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private auth = inject(Auth);

  user = signal<User | null>(null);
  isSignedIn = computed(() => this.user() !== null);
  userChanged = effect(() => console.log('User changed', this.user()));

  constructor() {
    this.registerToAuthChange();
  }

  signIn({ email, password }: UserCredentials): Observable<User> {

    const onSuccess = ({ user }: UserCredential): User => {
      this.user.set(user);
      return user;
    };

    const thePromise = signInWithEmailAndPassword(this.auth, email, password)
      .then(onSuccess)
      .catch(this.onError);

    return this.toObservable<User>(thePromise);
  }

  signOut(): Observable<any> {
    const thePromise = signOut(this.auth);
    return this.toObservable<any>(thePromise);
  }

  private registerToAuthChange(): void {
    onAuthStateChanged(this.auth, user => {
      this.user.set(user ?? null);
    });
  }

  private toObservable<T = any>(prom: Promise<T | Error>): Observable<T> {
    return from(prom).pipe(switchMap(promVal => {
      return (promVal instanceof Error)
        ? throwError(() => new Error(promVal.message))
        : of(promVal);
    }));
  }

  private onError(err: any): Error {
    return Error(`[Error] (${err.code}) ${err.message}`);
  }
}
