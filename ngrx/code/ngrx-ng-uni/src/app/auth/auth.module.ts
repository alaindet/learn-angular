import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule  } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';

import * as fromAuth from './reducers';
import { LoginComponent } from './login/login.component';

const routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', fromAuth.reducers),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule {}
