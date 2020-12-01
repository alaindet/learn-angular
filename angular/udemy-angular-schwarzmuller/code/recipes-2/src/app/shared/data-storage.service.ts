import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  private apiUrl = 'https://learn-angular-recipes.firebaseio.com/recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(this.apiUrl, recipes)
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }

  /**
   * Fetches recipes from API, stores it locally via their service
   * and returns an observable
   */
  fetchRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(this.apiUrl)
      .pipe(
        // Add ingredients array even if recipe doesn't have any
        // It normalizes input
        map(response => {
            console.log(response);
            return response.map(recipe => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : []
              };
            });
        }),
        // Store fetched recipes through their service
        tap(
          recipes => {
            this.recipeService.setRecipes(recipes);
          }
        )
      );
  }
}
