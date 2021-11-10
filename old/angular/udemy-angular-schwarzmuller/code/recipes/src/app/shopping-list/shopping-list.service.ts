import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  isEditing = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  private itemsDidChange(): void {
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.itemsDidChange();
  }

  addIngredients(ingredients: Ingredient[]): void {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.itemsDidChange();
  }

  updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.itemsDidChange();
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.itemsDidChange();
  }

  setIngredients(ingredients: Ingredient[]): void {
    this.ingredients = ingredients;
    this.itemsDidChange();
  }
}
