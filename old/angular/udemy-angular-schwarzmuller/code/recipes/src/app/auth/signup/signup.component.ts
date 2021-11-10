import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    private authService: AuthService
  ) {}

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log('email', email, 'password', password);
    this.authService.signupUser(email, password);
  }

}
