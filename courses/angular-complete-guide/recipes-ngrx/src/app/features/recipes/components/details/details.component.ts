import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '@/shared/types';
import { RecipeService } from '../../services';
import { finalize } from 'rxjs/operators';
import { ShoppingListService } from '@/features/shopping-list';

@Component({
  templateUrl: './details.component.html',
})
export class RecipeDetailsComponent implements OnInit {

  name: string;
  isLoading = false;
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private shoppingListService: ShoppingListService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params?.name;
      this.fetchRecipe();
    });
  }

  // TODO: Perform upsert
  onAddToShoppingList(): void {
    this.shoppingListService.createIngredient(this.recipe.ingredients);
  }

  onEditRecipe(): void {
    this.router.navigate(['/recipes', this.name, 'edit']);
  }

  onDeleteRecipe(): void {
    this.isLoading = true;
    this.recipeService.deleteRecipe(this.name);
    // TODO: Add Feedback?
    this.router.navigate(['/recipes']);
  }

  private fetchRecipe(): void {
    this.isLoading = true;
    this.recipeService.getRecipe(this.name)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(recipe => this.recipe = recipe);
  }
}
