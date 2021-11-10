import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { UtilsService } from './utils/utils.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [
    HomeComponent,
    NotFoundComponent,
  ],
  providers: [
    UtilsService,
  ]
})
export class CoreModule {}
