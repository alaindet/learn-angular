import { Routes } from '@angular/router';

import { HomeComponent } from './core/pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'lists',
    loadChildren: () => import('./features/lists/routes')
      .then((m) => m.LISTS_ROUTES),
  },
];

export default routes;
