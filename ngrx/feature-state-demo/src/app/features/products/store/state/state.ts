import { Product } from '../../types';

export interface ProductsState {
  list: Product[];
  selected: Product;
}
