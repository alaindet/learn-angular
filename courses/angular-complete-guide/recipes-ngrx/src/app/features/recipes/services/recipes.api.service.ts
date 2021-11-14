import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Ingredient, Response } from '@/shared/types';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../types';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {

  baseUrl = `${environment.apiUrl}/recipes`;

  constructor(
    private http: HttpClient,
  ) {}

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Response<Recipe>>(this.baseUrl, recipe)
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
