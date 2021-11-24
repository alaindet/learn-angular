import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Response, Recipe, Ingredient } from '@/shared/types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {

  baseUrl = `${environment.apiUrl}/recipes`;

  constructor(
    private http: HttpClient,
  ) {}

  createRecipe(ingredient: Recipe | Recipe[]): Observable<Recipe | Recipe[]> {
    return this.http.post<Response<Recipe | Recipe[]>>(
      this.baseUrl,
      ingredient,
    ).pipe(map(response => response.data));
  }

  addRecipeIngredients(name: string): Observable<Ingredient[]> {
    const url = `${this.baseUrl}/${name}/ingredients`;
    return this.http.put<Response<Ingredient[]>>(url, null)
      .pipe(map(response => response.data));
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Response<Recipe[]>>(this.baseUrl)
      .pipe(map(response => response.data));
  }

  getRecipe(name: string): Observable<Recipe> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.get<Response<Recipe>>(url)
      .pipe(map(response => response.data));
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    const { name, ...body } = recipe;
    const url = `${this.baseUrl}/${name}`;
    return this.http.patch<Response<Recipe>>(url, body)
      .pipe(map(response => response.data));
  }

  deleteRecipe(name: string): Observable<Recipe> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.delete<Response<Recipe>>(url)
      .pipe(map(response => response.data));
  }
}
