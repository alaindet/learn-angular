import { Routes } from '@angular/router';

import { ListsService } from '../services';
import { ListsPageComponent } from './pages/lists/lists.component';

export const LISTS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    providers: [ListsService],
    children: [
      { path: '', component: ListsPageComponent },
    ],
  },
];
