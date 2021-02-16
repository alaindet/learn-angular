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

  productForm: FormGroup;
  products$: Observable<AppState['products']>;

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.products$ = this.store.select('products');
    this.initForm();
  }

  onCreateProduct(): void {

    if (this.productForm.invalid) {
      return;
    }

    // New product
    const id = Date.now();
    const name = this.productForm.value.name;
    const product: Product = { id, name };

    // Dispatch
    const type = ProductsActionType.Create;
    const payload = { product };
    this.store.dispatch({ type, payload });

    // Reset form
    this.productForm.reset();
  }

  onRemoveProduct(id: Product['id']): void {
    const type = ProductsActionType.Delete;
    const payload = { id };
    this.store.dispatch({ type, payload });
  }

  initForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }
}
