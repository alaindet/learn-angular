import * as fromPizzas from './../actions/pizzas.action';

import { Pizza } from './../../models/pizza.model';

interface PizzaEntities {
  [id: number]: Pizza;
}

export interface PizzaState {
  entities: PizzaEntities;
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction,
): PizzaState {

  switch (action.type) {

    case fromPizzas.LOAD_PIZZAS: {

      console.log('Loading pizzas...');

      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {

      const pizzas = action.payload;

      const entities = pizzas.reduce(
        (entities: PizzaEntities, pizza: Pizza) => {
          return {...entities, [pizza.id]: pizza};
        },
        { ...state.entities }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      }
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {

      console.log('Pizzas loading FAILED', action.payload);

      return {
        ...state,
        loading: false,
        loaded: false,
      }
    }
  }

  return state;
}

// Selectors
export const getPizzasLoading = (state: PizzaState): boolean => state.loading;
export const getPizzasLoaded = (state: PizzaState): boolean => state.loaded;
export const getPizzasEntities = (state: PizzaState): PizzaEntities => state.entities;
