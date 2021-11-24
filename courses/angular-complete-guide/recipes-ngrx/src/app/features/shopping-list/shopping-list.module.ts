import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ShoppingListComponent } from './components/list/list.component';
import { ShoppingListItemEditComponent } from './components/item-edit/item-edit.component';
import { SharedModule } from '@/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListItemEditComponent,
  ],
})
export class ShoppingListModule {}
