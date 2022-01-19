import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { BookAction, retrieveBooksListSuccess, retrieveBooksListFailure } from './actions';

import { GoogleBooksService } from '../../services';

@Injectable()
export class BooksEffects {

  retrieveBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BookAction.Retrieve),
    mergeMap(() => this.booksService.getBooks().pipe(
      map(books => retrieveBooksListSuccess({ books })),
      catchError(() => of(retrieveBooksListFailure())),
    )),
  ));

  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService,
  ) {}
}
