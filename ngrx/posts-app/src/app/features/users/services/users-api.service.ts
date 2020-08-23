import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './../models/user.interface';

@Injectable()
export class UsersApiService {

  defaultOptions: any;

  constructor (
    private http: HttpClient,
  ) {
    this.defaultOptions = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getUsers(): Observable<User[]> {
    const url = 'http://localhost:4242/users';
    return this.http.get<User[]>(url);
  }
}
