import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  token: string;

  constructor(
    private router: Router
  ) {}

  signupUser(email: string, password: string): void {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(success => console.log('User signed up on Firebase', success))
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(success => {

        // Notify
        console.log('Logged in', success);

        // Store token
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token);

        // Navigate away
        this.router.navigate(['/']);

      })
      .catch(error => console.log('ERROR', error));
  }

  getToken(): string {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token);
    
    return this.token; // Weak implementation!
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  logout() {
    console.log('Logging out...');
    firebase.auth().signOut();
    this.token = null;
  }

}
