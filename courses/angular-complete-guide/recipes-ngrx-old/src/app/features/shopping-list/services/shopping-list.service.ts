import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Ingredient } from '@/shared/types';
import { IngredientsApiService } from './ingredients.api.service';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {

  private ingredients: Ingredient[] | null = null;
  private _ingredients$ = new BehaviorSubject<Ingredient[] | null>(null);
  private _currentIngredient$ = new BehaviorSubject<Ingredient | null>(null);

  constructor(
    private ingredientsApi: IngredientsApiService,
  ) {}

  setIngredients(ingredients: Ingredient[]): void {
    this.ingredients = ingredients;
    this._ingredients$.next(ingredients);
  }

  setCurrentIngredient(ingredient: Ingredient | null): void {
    this._currentIngredient$.next(ingredient);
  }

  getCurrentIngredient(): Observable<Ingredient | null> {
    return this._currentIngredient$.asObservable();
  }

  createRecipe(recipe: Ingredient): Observable<Ingredient> {
    return this.ingredientsApi.createIngredient(recipe);
  }

  getIngredients(force = false): Observable<Ingredient[]> {
    if (force || this.ingredients === null) {
      return this.ingredientsApi.getIngredients().pipe(
        tap(recipes => {
          this.ingredients = recipes;
          this._ingredients$.next(recipes);
        }),
        switchMap(() => this._ingredients$.asObservable()),
      );
    }

    return this._ingredients$.asObservable();
  }

  getIngredient(name: string, force = false): Observable<Ingredient> {
    if (force || this.ingredients === null) {
      return this.ingredientsApi.getIngredient(name);
    }

    return this._ingredients$.asObservable()
      .pipe(map(recipes => recipes.find(i => i.name === name)[0]));
  }

  updateRecipe(recipe: Ingredient): Observable<Ingredient> {
    return this.ingredientsApi.updateIngredient(recipe);
  }

  deleteRecipe(name: string): Observable<Ingredient> {
    return this.ingredientsApi.deleteIngredient(name);
  }
}
