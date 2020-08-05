import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './../models/post.interface';

@Injectable()
export class PostsApiService {

  baseUrl = 'http://localhost:4242';

  constructor(
    private http: HttpClient,
  ) {}

  getPosts(page = 1): Observable<Post[]> {

    const url = `${this.baseUrl}/posts`;

    const options = {
      header: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      params: new HttpParams()
        .set('_page', page.toString()),
    };

    return this.http.get<Post[]>(url, options);
  }
}
