import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  id: number;
  recipe: Recipe;
  paramsSub: Subscription;

  constructor(
    private recipesService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(
      (params: Params) => this.id = params.id
    );

    this.paramsSub = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.recipe = this.recipesService.getRecipe(this.id);
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

  onAddToShoppingList(): void {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe(): void {
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
