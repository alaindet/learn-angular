import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { createPayload } from 'src/app/core/utils';
import { Product } from '../../types';
import {
  ProductsState,
  getProductsList,
  getSelectedProduct,
  addProduct,
  selectProduct,
  deselectProduct,
} from '../../store';

@Component({
  templateUrl: 'product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListFeatureComponent implements OnInit {

  productsList$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;

  constructor(
    private store: Store<ProductsState>,
  ) {}

  ngOnInit() {
    this.productsList$ = this.store.select(getProductsList);
    this.selectedProduct$ = this.store.select(getSelectedProduct);
  }

  onCreateProduct(product: Product): void {
    const payload = createPayload({ product });
    const action = addProduct(payload);
    this.store.dispatch(action);
  }

  onSelectProduct(product: Product): void {
    const payload = createPayload({ product });
    const action = selectProduct(payload);
    this.store.dispatch(action);
  }

  onDeselectProduct(): void {
    const action = deselectProduct();
    this.store.dispatch(action);
  }
}
