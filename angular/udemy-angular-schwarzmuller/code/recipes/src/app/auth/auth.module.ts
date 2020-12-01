import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckPasswordsDirective } from '../shared/validators/check-passwords.directive';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    CheckPasswordsDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {}
