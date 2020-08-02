import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { TrainingService } from './services/training.service';
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
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
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
  providers: [
    TrainingService,
  ],
})
export class TrainingModule {}
