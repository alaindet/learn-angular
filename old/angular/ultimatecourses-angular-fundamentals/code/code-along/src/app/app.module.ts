import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { HomeComponent } from './core/components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PassengerDashboardModule } from './features/passenger-dashboard/passenger-dashboard.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'passengers',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes),
    PassengerDashboardModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
