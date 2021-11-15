import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    loadChildren: () => import('./features/recipes/recipes.module')
      .then(m => m.RecipesModule),
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./features/shopping-list/shopping-list.module')
      .then(m => m.ShoppingListModule),
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./features/auth/auth.module')
  //     .then(m => m.AuthModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
