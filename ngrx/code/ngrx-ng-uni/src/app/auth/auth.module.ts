import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule  } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { authReducer } from './store/reducers';
import { effects } from './store/effects';

const routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature(effects),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard,
      ],
    };
  }
}
