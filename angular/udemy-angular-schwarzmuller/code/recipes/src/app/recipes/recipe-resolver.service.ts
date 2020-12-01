import { Observable } from 'rxjs';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe> {

  constructor(
    private recipesService: RecipeService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe> | Promise<Recipe> | Recipe {
    const id = +route.params.id;
    const recipe = this.recipesService.getRecipe(id);
    // Put any "recipe not found" logic here!
    return recipe;
  }

}
