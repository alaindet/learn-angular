import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@/shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeDetailsComponent } from './components/details/details.component';
import { RecipeEditComponent } from './components/edit/edit.component';
import { RecipeItemComponent } from './components/item/item.component';
import { RecipesListComponent } from './components/list/list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesStartComponent } from './components/start/start.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
  ],
  declarations: [
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipesListComponent,
    RecipesComponent,
    RecipesStartComponent,
  ],
})
export class RecipesModule {}
