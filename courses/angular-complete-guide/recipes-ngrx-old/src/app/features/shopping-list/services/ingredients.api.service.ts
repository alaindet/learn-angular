import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Ingredient, Response } from '@/shared/types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IngredientsApiService {

  baseUrl = `${environment.apiUrl}/ingredients`;

  constructor(
    private http: HttpClient,
  ) {}

  createIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Response<Ingredient>>(this.baseUrl, ingredient)
      .pipe(map(response => response.data));
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Response<Ingredient[]>>(this.baseUrl)
      .pipe(map(response => response.data));
  }

  getIngredient(name: string): Observable<Ingredient> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.get<Response<Ingredient>>(url)
      .pipe(map(response => response.data));
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
    const { name, ...body } = ingredient;
    const url = `${this.baseUrl}/${name}`;
    return this.http.patch<Response<Ingredient>>(url, body)
      .pipe(map(response => response.data));
  }

  deleteIngredient(name: string): Observable<Ingredient> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.delete<Response<Ingredient>>(url)
      .pipe(map(response => response.data));
  }
}
