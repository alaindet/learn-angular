import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UiButtonModule } from './../components/button/button.module';
import { DemoUiButtonPage } from './pages/button/button.component';
import { DemoUiColorsPage } from './pages/colors/colors.component';

const routes: Routes = [
  {
    path: 'colors',
    component: DemoUiColorsPage,
  },
  {
    path: 'button',
    component: DemoUiButtonPage,
  },
];

@NgModule({
  declarations: [
    DemoUiButtonPage,
    DemoUiColorsPage,
  ],
  imports: [
    RouterModule.forChild(routes),
    FontAwesomeModule,
    UiButtonModule,
  ],
})
export class UiDemoModule {}
