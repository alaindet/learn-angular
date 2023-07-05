import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../services';
import { UserCredentials } from '../../types';
import { Router } from '@angular/router';

const FIELD = {
  EMAIL: { id: 'email' },
  PASSWORD: { id: 'password' },
} as const;

const imports = [
  NgIf,
  ReactiveFormsModule,
];

@Component({
  selector: 'app-page-sign-in-user',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports,
})
export class SignInUserPageComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  theForm!: FormGroup;
  FIELD = FIELD;

  get fEmail() { return this.getFormField(FIELD.EMAIL.id) }
  get fPassword() { return this.getFormField(FIELD.PASSWORD.id) }

  ngOnInit() {
    this.initForm();
  }

  onSignIn() {
    if (this.theForm.invalid) {
      return;
    }

    const credentials = this.theForm.value;
    this.signIn(credentials);
  }

  onSignInAsBasicUser() {
    const credentials: UserCredentials = {
      email: 'bar.basic@example.com',
      password: 'bar.basic@example.com',
    };
    this.signIn(credentials);
  }

  onSignInAsAdmin() {
    const credentials: UserCredentials = {
      email: 'foo.admin@example.com',
      password: 'foo.admin@example.com',
    };
    this.signIn(credentials);
  }

  private initForm(): void {

    const { required, email } = Validators;

    this.theForm = this.formBuilder.group({
      [FIELD.EMAIL.id]: ['', [required, email]],
      [FIELD.PASSWORD.id]: ['', [required]],
    });
  }

  private getFormField(fieldName: string): FormControl {
    return this.theForm.get(fieldName)! as FormControl;
  }

  private signIn(credentials: UserCredentials): void {
    this.authService.signIn(credentials).subscribe({
      error: err => console.error(err),
      next: () => this.router.navigate(['/courses']),
    });
  }
}
