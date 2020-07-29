import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

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
    outlet: 'training',
  },
  {
    path: 'new',
    component: TrainingNewPageComponent,
    outlet: 'training',
  },
  {
    path: 'past',
    component: TrainingPastPageComponent,
    outlet: 'training',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
  ],
  declarations: [
    TrainingPageComponent,
    TrainingCurrentPageComponent,
    TrainingNewPageComponent,
    TrainingPastPageComponent,
  ],
})
export class TrainingModule {}
