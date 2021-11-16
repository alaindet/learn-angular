import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Recipe } from '@/shared/types';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(
    private recipesService: RecipeService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): (
    | Observable<Recipe[]>
    | Promise<Recipe[]>
    | Recipe[]
  ) {
    return this.recipesService.getRecipes();
  }
}
