import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '@/shared/types';
import { RecipeService } from '../../services';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './list.component.html',
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  onNewRecipe(): void {
    this.router.navigate(['/recipes/new']);
  }
}
