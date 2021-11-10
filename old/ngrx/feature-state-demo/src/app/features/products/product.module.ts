import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { productsReducers } from './store';
import { ProductsRoutingModule } from './products-routing.module';
import * as features from './features';
import * as components from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', productsReducers),
  ],
  declarations: [
    features.ProductListFeatureComponent,
    components.AddProductComponent,
    components.ProductsListComponent,
    components.SelectedProductComponent,
  ],
})
export class ProductModule {}
