import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { UserService } from '../../services';
import { signInActions } from '../../store';

const imports = [
  ReactiveFormsModule,
];

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports,
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInPageComponent {

  private userService = inject(UserService);
  private store = inject(Store);

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;
    const credentials = { email, password };

    this.store.dispatch(signInActions.signIn({ credentials }));
  }
}
