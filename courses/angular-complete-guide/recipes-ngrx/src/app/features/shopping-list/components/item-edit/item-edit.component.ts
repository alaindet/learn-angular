import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '@/shared/types';
import { ShoppingListService } from '../../services';

@Component({
  selector: 'app-shopping-list-item-edit',
  templateUrl: './item-edit.component.html',
})
export class ShoppingListItemEditComponent implements OnInit, OnDestroy {

  @Output() submitted = new EventEmitter<void>();

  form: FormGroup;
  editMode = false;
  currentIngredient: Ingredient | null;


  private subs: { [sub: string]: Subscription } = {};

  constructor(
    private shoppingListService: ShoppingListService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.fetchCurrentIngredient();
  }

  ngOnDestroy(): void {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  onSubmit(): void {
    const { name, amount } = this.form.value;
    const newIngredient = new Ingredient(name, amount);
    const request = this.editMode
      ? this.shoppingListService.updateIngredient(newIngredient)
      : this.shoppingListService.createIngredient(newIngredient);

    request.subscribe(() => {
      this.editMode = false;
      this.onClear();
      this.form.reset();
      this.submitted.emit();
    });
  }

  onClear(): void {
    this.form.reset();
    this.editMode = false;
  }

  onDelete(): void {
    if (!this.currentIngredient) {
      return;
    }

    if (!confirm('Do you want to delete the ingredient?')) {
      return;
    }

    this.shoppingListService
      .deleteIngredient(this.currentIngredient.name)
      .subscribe(() => {
        this.onClear();
        this.submitted.emit();
      });
  }

  private fetchCurrentIngredient(): void {
    this.subs.ingredient = this.shoppingListService.getCurrentIngredient()
      .subscribe(ingredient => {
        this.currentIngredient = ingredient;
        this.editMode = !!this.currentIngredient;
        this.form.patchValue(ingredient);
      });
  }

  private initForm(existing?: Ingredient): void {
    this.form = this.formBuilder.group({
      name: [existing?.name ?? null, Validators.required],
      amount: [existing?.amount ?? null, Validators.required],
    });
  }
}
