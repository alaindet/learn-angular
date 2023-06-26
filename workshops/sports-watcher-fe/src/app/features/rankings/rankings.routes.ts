import { Routes } from '@angular/router';

import { RankingsPageComponent } from './pages';

export const RANKINGS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RankingsPageComponent,
  },
];
