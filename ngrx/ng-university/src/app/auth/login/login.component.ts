import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from './../auth.service';
import { AppState } from './../../store/reducers';
import * as AuthActions from './../store/actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  login() {
    const form = this.form.value;
    this.auth.login(form.email, form.password)
      .pipe(
        tap(user => {
          const payload = { user };
          const action = AuthActions.login(payload);
          this.store.dispatch(action);
          this.router.navigateByUrl('/courses');
        })
      )
      .subscribe(
        noop,
        () => alert('Login failed')
      );
  }
}
