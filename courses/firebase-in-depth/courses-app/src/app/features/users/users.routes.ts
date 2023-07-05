import { Routes } from '@angular/router';

import { SignUpUserPageComponent } from './pages/sign-up/sign-up.component';
import { SignInUserPageComponent } from './pages/sign-in/sign-in.component';
import { InviteUserPageComponent } from './pages/invite/invite.component';
import { isAuthenticatedGuard } from './guards';

export const USERS_ROUTES: Routes = [
  {
    path: 'sign-up',
    component: SignUpUserPageComponent,
  },
  {
    path: 'sign-in',
    component: SignInUserPageComponent,
  },
  {
    path: 'invite',
    canActivate: [isAuthenticatedGuard],
    component: InviteUserPageComponent,
  },
];
