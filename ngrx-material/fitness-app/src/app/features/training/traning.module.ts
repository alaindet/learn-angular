import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { TrainingPageComponent } from './containers/training/training.component';
import { TrainingCurrentPageComponent } from './containers/training-current/training-current.component';
import { TrainingNewPageComponent } from './containers/training-new/training-new.component';
import { TrainingPastPageComponent } from './containers/training-past/training-past.component';
import { StopTrainingDialogComponent } from './components/stop-training-dialog/stop-training-dialog.component';

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
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
  ],
  declarations: [
    TrainingPageComponent,
    TrainingCurrentPageComponent,
    TrainingNewPageComponent,
    TrainingPastPageComponent,
    StopTrainingDialogComponent,
  ],
  entryComponents: [
    StopTrainingDialogComponent,
  ],
})
export class TrainingModule {}
