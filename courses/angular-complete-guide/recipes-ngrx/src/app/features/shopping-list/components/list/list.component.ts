import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '@/shared/types';
import { ShoppingListService } from '../../services';

@Component({
  templateUrl: './list.component.html',
})
export class ShoppingListComponent implements OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(
    public shoppingListService: ShoppingListService,
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditing(index);
  }
}
