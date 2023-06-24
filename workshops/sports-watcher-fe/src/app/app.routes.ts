import { Routes } from '@angular/router';

import { LoggedLayoutComponent } from '@app/core/layouts';
import { SignInPageComponent } from './features/user/pages/sign-in/sign-in.component';

const DEFAULT_ROUTE = '/rankings';

let routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_ROUTE,
  },
  {
    path: '',
    component: LoggedLayoutComponent,
    canActivate: [], // TODO: Add logged user check
    children: [
      {
        path: 'matches',
        loadChildren: () => import('@app/features/matches'),
      },
      {
        path: 'teams',
        loadChildren: () => import('@app/features/teams'),
      },
    ],
  },

  {
    path: 'signin',
    component: SignInPageComponent,
  },

  {
    path: '**',
    redirectTo: DEFAULT_ROUTE,
  },
];

export const APP_ROUTES = routes;
