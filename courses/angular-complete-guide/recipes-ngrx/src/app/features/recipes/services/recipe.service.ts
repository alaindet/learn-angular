import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Recipe } from '@/shared/types';
import { RecipesApiService } from './recipes.api.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  _recipes$ = new BehaviorSubject<Recipe[] | null>(null);

  constructor(
    private recipesApi: RecipesApiService,
  ) {}

  get recipes$(): Observable<Recipe[]> {
    return this._recipes$.asObservable();
  }

  createRecipe(recipe: Recipe | Recipe[]): Observable<Recipe | Recipe[]> {
    return this.recipesApi.createRecipe(recipe);
  }

  syncRecipes(): void {
    this.recipesApi.getRecipes().subscribe(recipes => {
      this._recipes$.next(recipes);
    });
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
