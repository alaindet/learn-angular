import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './../models/post.interface';

@Injectable()
export class PostsApiService {

  defaultOptions: any;

  constructor(
    private http: HttpClient,
  ) {
    this.defaultOptions = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getPosts(): Observable<Post[]> {
    const url = 'http://localhost:4242/posts';
    return this.http.get<Post[]>(url);
  }
}
