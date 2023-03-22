import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos',
  },
  {
    path: 'todos',
    loadChildren: () => import('./todos/routes').then(m => m.TODOS_ROUTES),
  },
];

export default routes;
