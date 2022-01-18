import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/common/types';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {

  private baseUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(
    private http: HttpClient,
  ) {}

  getBooks(): Observable<Array<Book>> {

    const params = {
      maxResults: 5,
      orderBy: 'relevance',
      q: 'oliver sacks'
    };

    return this.http
      .get<{ items: Book[] }>(this.baseUrl, { params })
        .pipe(map(books => books.items || []));
  }
}
