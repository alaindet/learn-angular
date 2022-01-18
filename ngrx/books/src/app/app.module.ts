import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { reducers } from 'src/app/core/store';
import { AppComponent } from './app.component';

import { BooksCollectionComponent, BooksListComponent } from './components';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
  ],
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksCollectionComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
