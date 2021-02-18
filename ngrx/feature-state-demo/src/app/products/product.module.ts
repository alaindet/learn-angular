import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { productsReducers } from './store';
import { ProductListComponent } from './components/products-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', productsReducers),
  ],
  declarations: [
    ProductListComponent,
  ],
})
export class ProductModule {}
