import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActionReducerMap, StoreModule, Action } from '@ngrx/store';

import {
  AppState,
  productsReducer,
} from './store';

const actionReducerMap: ActionReducerMap<AppState, Action> = {
  products: productsReducer,
};

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(actionReducerMap),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
