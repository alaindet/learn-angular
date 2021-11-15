import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../../types';
import { RecipeService } from '../../services';

@Component({
  templateUrl: './details.component.html',
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(): void {
    this.router.navigate(['/recipes', this.id, 'edit']);
  }

  onDeleteRecipe(): void {
    this.recipeService.deleteRecipe(this.id);
    // TODO: Add Feedback?
    this.router.navigate(['/recipes']);
  }
}
