import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions, Routes } from '@angular/router';

import { AuthGuard } from './features/auth/guards/auth.guard';
import { WelcomePageComponent } from './features/welcome/containers/welcome/welcome.component';
import { LoginPageComponent } from './features/auth/containers/login/login.component';
import { SignupPageComponent } from './features/auth/containers/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: 'training',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/training/traning.module')
      .then(m => m.TrainingModule),
  },
];

const options: ExtraOptions = {

};

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
