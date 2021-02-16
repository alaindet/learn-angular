import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActionReducerMap, StoreModule, Action, ActionReducer } from '@ngrx/store';

import {
  AppState,
  counterReducer,
  // ProductsAction,
} from './store';

// const productsReducer: ActionReducer<AppState['products'], Action> = (
//   state: AppState['products'] = [],
//   action: Action,
// ) => {
//   switch (action.type) {
//     case ProductsAction.Add:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

const actionReducerMap: ActionReducerMap<AppState, Action> = {
  counter: counterReducer,
  // products: productsReducer,
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
