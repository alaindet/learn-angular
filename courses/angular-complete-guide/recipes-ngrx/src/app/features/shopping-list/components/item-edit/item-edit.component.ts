import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '@/shared/types';
import { ShoppingListService } from '../../services';

@Component({
  selector: 'app-shopping-list-item-edit',
  templateUrl: './item-edit.component.html',
})
export class ShoppingListItemEditComponent implements OnInit, OnDestroy {

  @ViewChild('itemForm', { static: false })
  shoppingListForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing$
      .subscribe(this.setEditingItem.bind(this));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm): void {
    const { name, amount } = form.value;
    const newIngredient = new Ingredient(name, amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    form.reset();
  }

  onClear(): void {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(): void {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  private setEditingItem(itemIndex: number): void {
    this.editedItemIndex = itemIndex;
    this.editMode = true;
    this.editedItem = this.shoppingListService.getIngredient(itemIndex);
    const { name, amount } = this.editedItem;
    this.shoppingListForm.setValue({ name, amount });
  }
}
