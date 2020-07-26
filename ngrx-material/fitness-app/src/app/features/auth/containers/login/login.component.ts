import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  /**
   * - Length must be 8-12 characters
   * - Must contain lowecase and/or uppercase letters
   * - Must contain at least one digit
   * - Must contain at least one special character @$!%*#?&
   */
  passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/;

  constructor(
    private fb: FormBuilder,
  ) {}

  get emailField() {
    return this.loginForm.get('email');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.initLoginForm();
  }

  onSubmit() {
    let formValue = 'no form value';
    if (this.loginForm.valid) {
      formValue = this.loginForm.value;
    }
    console.log('onSubmit', formValue);
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
          Validators.pattern(this.passwordRegex),
        ]
      ],
    });
  }
}
