import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Ingredient } from '@/shared/types';
import { IngredientsApiService } from './ingredients.api.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {

  private _currentIngredient$ = new BehaviorSubject<Ingredient | null>(null);

  constructor(
    private ingredientsApi: IngredientsApiService,
  ) {}

  setCurrentIngredient(ingredient: Ingredient | null): void {
    this._currentIngredient$.next(ingredient);
  }

  clearCurrentIngredient(): void {
    this._currentIngredient$.next(null);
  }

  getCurrentIngredient(): Observable<Ingredient | null> {
    return this._currentIngredient$.asObservable();
  }

  createIngredient(
    ingredient: Ingredient | Ingredient[],
  ): Observable<Ingredient | Ingredient[]> {
    return this.ingredientsApi.createIngredient(ingredient);
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.ingredientsApi.getIngredients();
  }

  getIngredient(name: string): Observable<Ingredient> {
    return this.ingredientsApi.getIngredient(name);
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.ingredientsApi.updateIngredient(ingredient);
  }

  deleteIngredient(name: string): Observable<Ingredient> {
    return this.ingredientsApi.deleteIngredient(name);
  }
}
