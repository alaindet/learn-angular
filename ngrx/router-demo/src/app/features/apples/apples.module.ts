import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ApplesListComponent } from './pages/list/list.component';
import { ApplesDetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: ApplesListComponent,
  },
  {
    path: ':id',
    component: ApplesDetailsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ApplesListComponent,
    ApplesDetailsComponent,
  ],
})
export class ApplesModule {}
