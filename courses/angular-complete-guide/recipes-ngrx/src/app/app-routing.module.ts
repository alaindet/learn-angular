import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/features/auth';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/recipes/recipes.module')
      .then(m => m.RecipesModule),
  },
  {
    path: 'shopping-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/shopping-list/shopping-list.module')
      .then(m => m.ShoppingListModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/features/auth/auth.module')
      .then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
