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

  editMode = false;
  currentIngredient: Ingredient | null;
  private subs: { [sub: string]: Subscription } = {};

  constructor(
    private shoppingListService: ShoppingListService,
  ) {}

  ngOnInit(): void {
    this.fetchCurrentIngredient();
  }

  ngOnDestroy(): void {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  onSubmit(form: NgForm): void {
    const { name, amount } = form.value;
    const newIngredient = new Ingredient(name, amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(newIngredient);
      this.editMode = false;
    } else {
      this.shoppingListService.createIngredient(newIngredient);
    }

    form.reset();
  }

  onClear(): void {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(): void {
    if (this.currentIngredient !== null) {
      this.shoppingListService.deleteIngredient(this.currentIngredient.name);
      this.onClear();
    }
  }

  private fetchCurrentIngredient(): void {
    this.subs.ingredient = this.shoppingListService.getCurrentIngredient()
      .subscribe(ingredient => {
        this.currentIngredient = ingredient;
        this.editMode = !!this.currentIngredient;
      });
  }
}
