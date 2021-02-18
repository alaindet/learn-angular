import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { createPayload } from '../../../core/utils';
import { Product } from '../../types';
import { ProductsState, getProductsList, getSelectedProduct, addProduct, selectProduct } from '../../store';

@Component({
  templateUrl: 'product-list.component.html',
})
export class ProductListComponent implements OnInit {

  id = 0;
  productsList$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  form: FormGroup;

  constructor(
    private store: Store<ProductsState>,
  ) {}

  ngOnInit() {
    this.initForm();
    this.productsList$ = this.store.select(getProductsList);
    this.selectedProduct$ = this.store.select(getSelectedProduct);
  }

  onCreate(): void {
    if (this.form.valid) {
      const product = this.readProductFromForm();
      this.addProduct(product);
    }
  }

  onSelectProduct(product: Product): void {
    this.selectProduct(product);
  }

  private initForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  private readProductFromForm(): Product {
    return {
      id: ++this.id,
      title: this.form.value.title,
    };
  }

  private addProduct(product: Product): void {
    const payload = createPayload({ product });
    const action = addProduct(payload);
    this.store.dispatch(action);
  }

  private selectProduct(product: Product): void {
    const payload = createPayload({ product });
    const action = selectProduct(payload);
    this.store.dispatch(action);
  }
}
