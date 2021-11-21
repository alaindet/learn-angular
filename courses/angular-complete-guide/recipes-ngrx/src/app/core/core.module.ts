import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './features/auth';
import { AlertsModule } from './features/alerts';
import { HeaderComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlertsModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
    AlertsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ]
})
export class CoreModule {}
