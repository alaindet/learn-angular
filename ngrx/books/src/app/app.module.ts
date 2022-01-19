import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, effects, devToolsConfig } from 'src/app/core/store';
import { ButtonModule } from 'src/app/shared/components';
import { AppComponent } from './app.component';
import { BooksCollectionModule } from './features/books-collection';
import { BooksListModule } from './features/books-list';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    // Store
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument(devToolsConfig) : [],

    // Features
    BooksCollectionModule,
    BooksListModule,

    // Components
    ButtonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
