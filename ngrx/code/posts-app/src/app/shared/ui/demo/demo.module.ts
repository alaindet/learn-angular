import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UiAlertModule } from './../components/alert/alert.module';
import { UiBreadcrumbsModule } from './../components/breadcrumbs/breadcrumbs.module';
import { UiButtonModule } from './../components/button/button.module';
import { UiCardModule } from './../components/card/card.module';
import { UiPaginationModule } from './../components/pagination/pagination.module';

import { DemoUiIndexPage } from './pages/index/index.component';
import { DemoUiAlertPage } from './pages/alert/alert.component';
import { DemoUiColorPage } from './pages/color/color.component';
import { DemoUiBreadcrumbsPage } from './pages/breadcrumbs/breadcrumbs.component';
import { DemoUiButtonPage } from './pages/button/button.component';
import { DemoUiCardPage } from './pages/card/card.component';
import { DemoUiPaginationPage } from './pages/pagination/pagination.component';

export const routes: Routes = [
  {
    path: '',
    component: DemoUiIndexPage,
    data: { label: 'Demo: Index' },
  },
  {
    path: 'alert',
    component: DemoUiAlertPage,
    data: { label: 'Demo: Alert' },
  },
  {
    path: 'breadcrumbs',
    component: DemoUiBreadcrumbsPage,
    data: { label: 'Demo: Breadcrumbs' },
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
    DemoUiAlertPage,
    DemoUiBreadcrumbsPage,
    DemoUiButtonPage,
    DemoUiCardPage,
    DemoUiColorPage,
    DemoUiPaginationPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,

    UiAlertModule,
    UiBreadcrumbsModule,
    UiButtonModule,
    UiCardModule,
    UiPaginationModule,
  ],
})
export class UiDemoModule {}
