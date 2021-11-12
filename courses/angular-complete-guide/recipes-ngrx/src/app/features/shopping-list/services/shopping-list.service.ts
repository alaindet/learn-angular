import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Ingredient } from '@/shared/types';
import { MOCK_INGREDIENTS } from '../mocks/ingredients';

@Injectable()
export class ShoppingListService {

  private _ingredients = MOCK_INGREDIENTS;
  private _ingredients$ = new BehaviorSubject<Ingredient[]>(MOCK_INGREDIENTS);
  private _startedEditing$ = new Subject<number>();

  get ingredients$(): Observable<Ingredient[]> {
    return this._ingredients$.asObservable();
  }

  get startedEditing$(): Observable<number> {
    return this._startedEditing$.asObservable();
  }

  startEditing(index: number): void {
    this._startedEditing$.next(index);
  }

  getIngredient(index: number): Ingredient {
    return this._ingredients[index];
  }

  addIngredient(ingredient: Ingredient): void {
    this._ingredients.push(ingredient);
    this._ingredients$.next([...this._ingredients]);
  }

  addIngredients(ingredients: Ingredient[]): void {
    this._ingredients.push(...ingredients);
    this._ingredients$.next([...this._ingredients]);
  }

  updateIngredient(index: number, ingredient: Ingredient): void {
    this._ingredients[index] = ingredient;
    this._ingredients$.next([...this._ingredients]);
  }

  deleteIngredient(index: number): void {
    this._ingredients = this._ingredients.filter((_, i) => i !== index);
    this._ingredients$.next([...this._ingredients]);
  }
}
