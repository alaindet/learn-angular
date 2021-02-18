import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as features from './features';

const routes: Routes = [
  { path: '', component: features.ProductListFeatureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
