import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UiButtonModule } from './../components/button/button.module';
import { DemoUiIndex } from './pages/index/index.component';
import { DemoUiButtonPage } from './pages/button/button.component';
import { DemoUiColorPage } from './pages/color/color.component';

export const routes: Routes = [
  {
    path: '',
    component: DemoUiIndex,
    data: { label: 'Demo: Index' },
  },
  {
    path: 'button',
    component: DemoUiButtonPage,
    data: { label: 'Demo: Button' },
  },
  {
    path: 'color',
    component: DemoUiColorPage,
    data: { label: 'Demo: Color' },
  },
];

@NgModule({
  declarations: [
    DemoUiIndex,
    DemoUiButtonPage,
    DemoUiColorPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,

    UiButtonModule,
  ],
})
export class UiDemoModule {}
