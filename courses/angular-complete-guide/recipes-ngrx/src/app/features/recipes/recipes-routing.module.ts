import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/guards/auth.guard';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesStartComponent } from './components/start/start.component';
import { RecipeEditComponent } from './components/edit/edit.component';
import { RecipeDetailsComponent } from './components/details/details.component';
// import { RecipesResolverService } from './services';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    // canActivate: [AuthGuard],
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
        // resolve: [RecipesResolverService],
      },
      {
        path: ':name/edit',
        component: RecipeEditComponent,
        // resolve: [RecipesResolverService],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
