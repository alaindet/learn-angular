import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiButtonModule } from './../components/button/button.module';
import { DemoUiButtonPage } from './pages/button/button.component';

const routes: Routes = [
  {
    path: 'button',
    component: DemoUiButtonPage,
  }
];

@NgModule({
  declarations: [
    DemoUiButtonPage,
  ],
  imports: [
    RouterModule.forChild(routes),
    UiButtonModule,
  ],
})
export class UiDemoModule {}
