import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { reducers } from 'src/app/core/store';
import { AppComponent } from './app.component';
import { BooksModule } from './features/books';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    BooksModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
