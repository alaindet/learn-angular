import { Routes } from '@angular/router';

import { TodosComponent } from './todos.component';

export const TODOS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      { path: '', component: TodosComponent },
    ],
  },
];
