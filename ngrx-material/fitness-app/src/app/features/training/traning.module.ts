import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TrainingPageComponent } from './containers/training/training.component';
import { TrainingCurrentPageComponent } from './containers/training-current/training-current.component';
import { TrainingNewPageComponent } from './containers/training-new/training-new.component';
import { TrainingPastPageComponent } from './containers/training-past/training-past.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingPageComponent,
  },
  {
    path: 'current',
    component: TrainingCurrentPageComponent,
  },
  {
    path: 'new',
    component: TrainingNewPageComponent,
  },
  {
    path: 'past',
    component: TrainingPastPageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TrainingPageComponent,
    TrainingCurrentPageComponent,
    TrainingNewPageComponent,
    TrainingPastPageComponent,
  ],
})
export class TrainingModule {}
