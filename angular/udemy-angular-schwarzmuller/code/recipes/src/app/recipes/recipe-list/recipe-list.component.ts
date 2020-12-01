import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {

  items: Recipe[];
  itemsSub: Subscription;

  constructor(
    private recipesService: RecipeService
  ) {}

  ngOnInit(): void {

    this.items = this.recipesService.getRecipes();

    this.itemsSub = this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.items = recipes;
      }
    );

  }

  ngOnDestroy(): void {
    this.itemsSub.unsubscribe();
  }

}
