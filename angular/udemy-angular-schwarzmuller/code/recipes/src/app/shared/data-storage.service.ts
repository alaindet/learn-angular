import { AuthService } from '../auth/auth.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { Ingredient } from './ingredient.model';

interface AppData {
  recipes: Recipe[];
  ingredients: Ingredient[];
}

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  baseUrl = 'https://alaindet-udemy-angular-recipes.firebaseio.com/';
  dataUrl: string;

  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private ingredientsService: ShoppingListService,
    private authService: AuthService
  ) {
    this.dataUrl = this.baseUrl + '/data.json';
  }

  store(): void {
    const token = this.authService.getToken();
    const url = `${this.dataUrl}?auth=${token}`;
    const data = {
      recipes: this.recipeService.getRecipes(),
      ingredients: this.ingredientsService.getIngredients()
    };
    this.http.put(url, data)
      .subscribe(
        (response: Response) => {
          console.log('Data stored to Firebase.');
        },
        (error: Response) => {
          console.log('ERROR: Data not stored to Firebase.');
        }
      );
  }

  fetch(): void {
    const token = this.authService.getToken();
    const url = `${this.dataUrl}?auth=${token}`;
    this.http.get(url)
      .pipe(
        map((response: Response) => response.json()),
        map((data: AppData) => {
          for (const recipe of data.recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return data;
        })
      )
      .subscribe(
        (data: AppData) => {
          this.recipeService.setRecipes(data.recipes);
          this.ingredientsService.setIngredients(data.ingredients);
        }
      );
  }

}
