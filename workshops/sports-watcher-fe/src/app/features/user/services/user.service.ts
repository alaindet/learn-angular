import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { User, UserCredentials } from '../types';
import { DataResponse } from '@app/common/types';
import { environment } from '@app/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);

  signIn(credentials: UserCredentials): Observable<User> {
    const url = `${environment.apiUrl}/users/signin`;
    return this.http.post<DataResponse<User>>(url, credentials)
      .pipe(map(res => res.data));
  }
}
