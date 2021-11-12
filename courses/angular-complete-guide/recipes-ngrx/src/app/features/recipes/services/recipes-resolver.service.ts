import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStorageService } from '@/shared/services';
import { Recipe } from '../types';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): (
    | Observable<Recipe[]>
    | Promise<Recipe[]>
    | Recipe[]
  ) {
    const recipes = this.recipesService.getRecipes();

    if (!recipes.length) {
      return this.dataStorageService.fetchRecipes();
    }

    return recipes;
  }
}
