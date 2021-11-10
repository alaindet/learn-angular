import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  @ViewChild('firstInput') firstInput: ElementRef;
  isEditingSub: Subscription;
  isEditing = false;
  currentIndex: number;

  constructor(
    private slService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.isEditingSub = this.slService.isEditing
      .subscribe(
        (index: number) => {
          this.isEditing = true;
          this.currentIndex = index;
          const ingredient = this.slService.getIngredient(this.currentIndex);
          this.slForm.setValue({
            name: ingredient.name,
            amount: ingredient.amount
          });
        }
      );
  }

  ngOnDestroy(): void {
    this.isEditingSub.unsubscribe();
  }

  onSubmit(form: NgForm): void {

    const data = form.value;
    const ingredient = new Ingredient(data.name, data.amount);

    if (this.isEditing) {
      this.slService.updateIngredient(this.currentIndex, ingredient);
    } else {
      this.slService.addIngredient(ingredient);
    }

    this.onClear();
  }

  onClear(): void {
    this.slForm.reset();
    this.isEditing = false;
    this.firstInput.nativeElement.focus();
  }

  onDelete(): void {
    this.slService.deleteIngredient(this.currentIndex);
    this.onClear();
  }

}
