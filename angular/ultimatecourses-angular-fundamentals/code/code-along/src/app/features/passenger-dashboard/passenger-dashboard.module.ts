import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';

const routes: Routes = [
  {
    path: 'passengers',
    children: [
      {
        path: '',
        component: PassengerDashboardComponent,
      },
      {
        path: ':id',
        component: PassengerViewerComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [

    // Containers
    PassengerDashboardComponent,
    PassengerViewerComponent,

    // Components
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PassengerDashboardModule {}
