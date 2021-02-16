import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './products';

import {
  AppState,
  productsSelector,
  createProduct,
  updateProduct,
  deleteProduct,
} from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  product: Product;
  productForm: FormGroup;
  products$: Observable<AppState['products']>;

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.products$ = this.store.select(productsSelector);
    this.initForm();
  }

  onCreateOrUpdateProduct(): void {
    if (this.productForm.invalid) {
      return;
    }

    const id = this.product ? this.product.id : Date.now();
    const name = this.productForm.value.name;
    const product = { id, name };

    this.product
      ? this.updateProduct(product)
      : this.createProduct(product);

    this.productForm.reset();
    this.product = null;
  }

  onSelectProduct(product: Product): void {
    this.product = product;
    const { name } = product;
    this.productForm.patchValue({ name });
  }

  onRemoveProduct(id: Product['id']): void {
    const payload = { id };
    const action = deleteProduct(payload);
    this.store.dispatch(action);
  }

  onCancel(): void {
    this.productForm.reset();
    this.product = null;
  }

  private initForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }

  private createProduct(product: Product): void {
    const payload = { product };
    const action = createProduct(payload);
    this.store.dispatch(action);
  }

  private updateProduct(product: Product): void {
    const payload = { product };
    const action = updateProduct(payload);
    this.store.dispatch(action);
  }
}
