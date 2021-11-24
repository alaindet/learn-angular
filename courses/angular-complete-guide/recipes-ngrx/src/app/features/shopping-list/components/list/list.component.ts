import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '@/shared/types';
import { ShoppingListService } from '../../services';
import { finalize, Subscription } from 'rxjs';

@Component({
  templateUrl: './list.component.html',
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  currentIngredient: Ingredient | null;
  isLoading = true;
  private subs: { [sub: string]: Subscription } = {};

  constructor(
    public shoppingListService: ShoppingListService,
  ) {}

  ngOnInit(): void {
    this.fetchIngredients();
    this.shoppingListService.getCurrentIngredient()
      .subscribe(ingredient => this.currentIngredient = ingredient);
  }

  ngOnDestroy(): void {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  onEditItem(index: number): void {
    this.shoppingListService.setCurrentIngredient(this.ingredients[index]);
  }

  onFormSubmitted(): void {
    this.shoppingListService.clearCurrentIngredient();
    this.fetchIngredients();
  }

  private fetchIngredients(): void {
    this.isLoading = true;
    this.shoppingListService.getIngredients()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(ingredients => this.ingredients = ingredients);
  }
}
