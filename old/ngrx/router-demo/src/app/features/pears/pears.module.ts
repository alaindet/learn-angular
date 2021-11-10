import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PearsListComponent } from './pages/list/list.component';
import { PearsDetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: PearsListComponent,
  },
  {
    path: ':id',
    component: PearsDetailsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PearsListComponent,
    PearsDetailsComponent,
  ],
})
export class PearsModule {}
