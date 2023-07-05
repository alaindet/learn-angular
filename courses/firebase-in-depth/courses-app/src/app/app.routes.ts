import { Routes } from '@angular/router';

import { isAuthenticatedGuard } from './features/users/guards';

const DEFAULT_ROUTE = '/courses';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_ROUTE,
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users'),
  },
  {
    path: 'courses',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./features/courses'),
  },
  {
    path: 'playground',
    loadChildren: () => import('./features/playground'),
  },
];
