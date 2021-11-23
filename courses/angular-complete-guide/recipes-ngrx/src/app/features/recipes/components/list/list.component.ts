import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Recipe } from '@/shared/types';
import { RecipeService } from '../../services';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './list.component.html',
})
export class RecipesListComponent implements OnInit {

  recipes$: Observable<Recipe[]>;

  constructor(
    public recipesService: RecipeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.recipesService.syncRecipes();
    this.recipes$ = this.recipesService.recipes$;
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.recipesService.syncRecipes());
  }

  onNewRecipe(): void {
    this.router.navigate(['/recipes/new']);
  }
}
