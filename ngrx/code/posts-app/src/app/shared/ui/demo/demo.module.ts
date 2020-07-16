import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DemoUiIndexPage } from './pages/index/index.component';
import { DemoUiColorPage } from './pages/color/color.component';
import { UiButtonModule } from './../components/button/button.module';
import { DemoUiButtonPage } from './pages/button/button.component';
import { UiCardModule } from './../components/card/card.module';
import { DemoUiCardPage } from './pages/card/card.component';
import { UiPaginationModule } from './../components/pagination/pagination.module';
import { DemoUiPaginationPage } from './pages/pagination/pagination.component';

export const routes: Routes = [
  {
    path: '',
    component: DemoUiIndexPage,
    data: { label: 'Demo: Index' },
  },
  {
    path: 'button',
    component: DemoUiButtonPage,
    data: { label: 'Demo: Button' },
  },
  {
    path: 'card',
    component: DemoUiCardPage,
    data: { label: 'Demo: Card' },
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
    DemoUiIndexPage,
    DemoUiButtonPage,
    DemoUiCardPage,
    DemoUiColorPage,
    DemoUiPaginationPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,

    UiButtonModule,
    UiCardModule,
    UiPaginationModule,
  ],
})
export class UiDemoModule {}
