import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DemoUiIndex } from './pages/index/index.component';
import { DemoUiColorPage } from './pages/color/color.component';
import { UiButtonModule } from './../components/button/button.module';
import { DemoUiButtonPage } from './pages/button/button.component';
import { UiPaginationModule } from './../components/pagination/pagination.module';
import { DemoUiPaginationPage } from './pages/pagination/pagination.component';

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
  {
    path: 'pagination',
    component: DemoUiPaginationPage,
    data: { label: 'Demo: Pagination' },
  },
];

@NgModule({
  declarations: [
    DemoUiIndex,
    DemoUiButtonPage,
    DemoUiColorPage,
    DemoUiPaginationPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,

    UiButtonModule,
    UiPaginationModule,
  ],
})
export class UiDemoModule {}
