import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipe } from '@/shared/types';
import { RecipesApiService } from './recipes.api.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(
    private recipesApi: RecipesApiService,
  ) {}

  createRecipe(recipe: Recipe | Recipe[]): Observable<Recipe | Recipe[]> {
    return this.recipesApi.createRecipe(recipe);
  }

  getRecipes(force = false): Observable<Recipe[]> {
    return this.recipesApi.getRecipes();
  }

  getRecipe(name: string, force = false): Observable<Recipe> {
    return this.recipesApi.getRecipe(name);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.recipesApi.updateRecipe(recipe);
  }

  deleteRecipe(name: string): Observable<Recipe> {
    return this.recipesApi.deleteRecipe(name);
  }
}
