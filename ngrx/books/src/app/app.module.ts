import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { reducers } from 'src/app/core/store';
import { AppComponent } from './app.component';

import { BooksCollectionModule } from './features/books-collection';
import { BooksListModule } from './features/books-list';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),

    BooksCollectionModule,
    BooksListModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
