import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { // Sign up
    path: 'signup', component: SignupComponent
  },
  { // Sign in
    path: 'signin', component: SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class AuthRoutingModule {}
