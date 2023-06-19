import { Routes } from '@angular/router';

const DEFAULT_ROUTE = '/courses';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DEFAULT_ROUTE },
  { path: 'users', loadChildren: () => import('./features/users') },
  { path: 'courses', loadChildren: () => import('./features/courses') },
  { path: 'settings', loadChildren: () => import('./features/settings') },
];
