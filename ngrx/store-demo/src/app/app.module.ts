import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActionReducerMap, StoreModule, Action, ActionReducer } from '@ngrx/store';

interface AppState {
  counter: number;
  products: any[];
}

enum CounterAction {
  Increment = 'INCREMENT',
  Decrement = 'DECREMENT',
}

enum ProductsAction {
  Add = 'ADD',
}

const counterReducer: ActionReducer<AppState['counter'], Action> = (
  state: AppState['counter'] = 0,
  action: Action,
) => {
  switch (action.type) {
    case CounterAction.Increment:
      return state + 1;
    case CounterAction.Decrement:
      return state - 1;
    default:
      return state;
  }
};

const productsReducer: ActionReducer<AppState['products'], Action> = (
  state: AppState['products'] = [],
  action: Action,
) => {
  switch (action.type) {
    case ProductsAction.Add:
      return [...state, action.payload];
    default:
      return state;
  }
};

const actionReducerMap: ActionReducerMap<AppState, Action> = {
  counter: counterReducer,
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
