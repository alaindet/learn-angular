import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './products';

import { AppState, ProductsActionType } from './store';

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
    this.products$ = this.store.select('products');
    this.initForm();
  }

  onCreateOrUpdateProduct(): void {
    if (this.productForm.valid) {
      this.product ? this.updateProduct() : this.createProduct();
      this.productForm.reset();
      this.product = null;
    }
  }

  onSelectProduct(product: Product): void {
    this.product = product;
    const { name } = product;
    this.productForm.patchValue({ name });
  }

  onRemoveProduct(id: Product['id']): void {
    const type = ProductsActionType.Delete;
    const payload = { id };
    this.store.dispatch({ type, payload });
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

  private createProduct(): void {
    const id = Date.now();
    const name = this.productForm.value.name;
    const product = { id, name };
    const type = ProductsActionType.Create;
    const payload = { product };
    this.store.dispatch({ type, payload });
  }

  private updateProduct(): void {
    const id = this.product.id;
    const name = this.productForm.value.name;
    const product = { id, name };
    const type = ProductsActionType.Update;
    const payload = { product };
    this.store.dispatch({ type, payload });
  }
}
