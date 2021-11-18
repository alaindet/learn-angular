import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { Recipe } from '@/shared/types';
import { ShoppingListService } from '@/features/shopping-list';
import { RecipeService } from '../../services';

@Component({
  templateUrl: './details.component.html',
})
export class RecipeDetailsComponent implements OnInit {

  name: string;
  isLoading = false;
  recipe: Recipe;

  constructor(
    private recipesService: RecipeService,
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
    if (!confirm('Do you want to delete the recipe?')) {
      return;
    }
    this.isLoading = true;
    this.recipesService.deleteRecipe(this.name)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        error: err => console.error(err),
        next: () => {
          console.log('Deleted');
          this.recipesService.syncRecipes();
          this.router.navigate(['/recipes']);
        },
      });
  }

  private fetchRecipe(): void {
    this.isLoading = true;
    this.recipesService.getRecipe(this.name)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(recipe => this.recipe = recipe);
  }
}
