import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Auth, User, UserCredential, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Observable, from, of, switchMap, throwError } from 'rxjs';

import { UserCredentials } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private auth = inject(Auth);

  user = signal<User | null>(null);
  userRole = signal<'basic' | 'admin' | null>(null);
  userIsAdmin = computed(() => this.userRole() === 'admin');
  userIsBasic = computed(() => this.userRole() === 'basic');
  isSignedIn = computed(() => this.user() !== null);
  userRoleEffect = effect(
    () => {

      // Sign out
      if (!this.user) {
        this.userRole.set(null);
      }

      // Sign in as...?
      this.user()?.getIdTokenResult().then(res => {
        this.userRole.set(res.claims['role'] ?? null);
      });
    },
    { allowSignalWrites: true },
  );

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
