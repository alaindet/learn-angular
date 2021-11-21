import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@/core/features/auth';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesStartComponent } from './components/start/start.component';
import { RecipeEditComponent } from './components/edit/edit.component';
import { RecipeDetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipesStartComponent,
      },
      {
        path: 'new',
        component: RecipeEditComponent,
      },
      {
        path: ':name',
        component: RecipeDetailsComponent,
      },
      {
        path: ':name/edit',
        component: RecipeEditComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
