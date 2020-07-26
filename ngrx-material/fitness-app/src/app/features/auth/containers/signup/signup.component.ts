import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupPageComponent implements OnInit {

  signupForm: FormGroup;
  eighteenYearsAgo: Date;

  constructor(
    private fb: FormBuilder,
  ) {}

  get emailField() {
    return this.signupForm.get('email');
  }

  get passwordField() {
    return this.signupForm.get('password');
  }

  get birthdateField() {
    return this.signupForm.get('birthdate');
  }

  get agreeField() {
    return this.signupForm.get('agree');
  }

  ngOnInit() {
    this.setMaxDate();
    this.initForm();
  }

  onSubmit() {
    let formValue = 'no form value';
    if (this.signupForm.valid) {
      formValue = this.signupForm.value;
    }
    console.log('onSubmit', formValue);
  }

  atLeastEighteen = (d: Date | null): boolean => {
    return d < this.eighteenYearsAgo;
  };

  private setMaxDate() {
    this.eighteenYearsAgo = new Date();
    this.eighteenYearsAgo.setFullYear(this.eighteenYearsAgo.getFullYear() - 18);
  }

  private initForm() {
    this.signupForm = this.fb.group({
      email: [null, [
        Validators.required,
        Validators.email,
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(6),
      ]],
      birthdate: [null,
        Validators.required,
      ],
      agree: [null, [
        Validators.required,
        Validators.requiredTrue,
      ]],
    });
  }
}
