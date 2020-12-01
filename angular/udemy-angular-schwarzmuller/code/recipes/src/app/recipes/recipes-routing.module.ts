import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailPlaceholderComponent } from './recipe-detail-placeholder/recipe-detail-placeholder.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { // No recipe selected
        path: '',
        pathMatch: 'full',
        component: RecipeDetailPlaceholderComponent
      },
      { // Create
        path: 'create',
        component: RecipeEditComponent,
        canActivate: [AuthGuard]
      },
      { // Select
        path: ':id',
        component: RecipeDetailComponent
      },
      { // Edit
        path: ':id/edit',
        component: RecipeEditComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class RecipesRoutingModule {}
