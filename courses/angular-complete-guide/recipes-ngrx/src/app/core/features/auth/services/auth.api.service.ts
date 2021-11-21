import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse, LoginResponseData } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

  baseUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
  ) {}

  login(email: string, password: string): Observable<LoginResponseData> {
    const url = `${this.baseUrl}/login`;
    const body = { email, password };
    return this.http.post<LoginResponse>(url, body)
      .pipe(map(response => response.data));
  }
}
