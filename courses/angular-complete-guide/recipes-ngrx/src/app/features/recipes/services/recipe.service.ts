import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { RecipesApiService } from './recipes.api.service';
import { Recipe } from '../types';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private recipes: Recipe[] | null = null;
  private _recipes$ = new BehaviorSubject<Recipe[] | null>(null);

  constructor(
    private recipesApi: RecipesApiService,
  ) {}

  setRecipes(recipes: Recipe[]): Observable<Recipe[]> {
    this.recipes = recipes;
    this._recipes$.next(recipes);
    return this._recipes$.asObservable();
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.recipesApi.createRecipe(recipe);
  }

  getRecipes(force = false): Observable<Recipe[]> {
    if (force || this.recipes === null) {
      return this.recipesApi.getRecipes().pipe(
        tap(recipes => {
          this.recipes = recipes;
          this._recipes$.next(recipes);
        }),
        switchMap(() => this._recipes$.asObservable()),
      );
    }

    return this._recipes$.asObservable();
  }

  getRecipe(name: string, force = false): Observable<Recipe> {
    if (force || this.recipes === null) {
      return this.recipesApi.getRecipe(name);
    }

    return this._recipes$.asObservable()
      .pipe(map(recipes => recipes.find(i => i.name === name)[0]));
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.recipesApi.updateRecipe(recipe);
  }

  deleteRecipe(name: string): Observable<Recipe> {
    return this.recipesApi.deleteRecipe(name);
  }
}
