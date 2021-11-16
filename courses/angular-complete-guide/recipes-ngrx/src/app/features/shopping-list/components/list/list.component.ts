import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '@/shared/types';
import { ShoppingListService } from '../../services';
import { finalize, Subscription } from 'rxjs';

@Component({
  templateUrl: './list.component.html',
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  isLoading = true;
  private subs: { [sub: string]: Subscription } = {};

  constructor(
    public shoppingListService: ShoppingListService,
  ) {}

  ngOnInit(): void {
    this.fetchIngredients();
  }

  ngOnDestroy(): void {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  onEditItem(index: number): void {
    this.shoppingListService.setCurrentIngredient(this.ingredients[index]);
  }

  private fetchIngredients(): void {
    this.isLoading = true;
    this.shoppingListService.getIngredients()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(ingredients => this.ingredients = ingredients);
  }
}
