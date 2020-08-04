import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UiAlertModule } from './../components/alert/alert.module';
import { UiBreadcrumbsModule } from './../components/breadcrumbs/breadcrumbs.module';
import { UiButtonModule } from './../components/button/button.module';
import { UiCardModule } from './../components/card/card.module';
import { UiGhostDotsModule } from './../components/ghost/dots/dots.module';
import { UiGhostRectangleModule } from './../components/ghost/rectangle/rectangle.module';
import { UiGridModule } from './../components/grid/grid.module';
import { UiPaginationModule } from './../components/pagination/pagination.module';

import { DemoUiIndexPage } from './pages/index/index.component';
import { DemoUiAlertPage } from './pages/alert/alert.component';
import { DemoUiColorPage } from './pages/color/color.component';
import { DemoUiBreadcrumbsPage } from './pages/breadcrumbs/breadcrumbs.component';
import { DemoUiButtonPage } from './pages/button/button.component';
import { DemoUiCardPage } from './pages/card/card.component';
import { DemoUiGhostPage } from './pages/ghost/ghost.component';
import { DemoUiGridPage } from './pages/grid/grid.component';
import { DemoUiPaginationPage } from './pages/pagination/pagination.component';
import { DemoUiTypographyPage } from './pages/typography/typography.component';

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
    path: 'ghost',
    component: DemoUiGhostPage,
    data: { label: 'Demo: Ghost' },
  },
  {
    path: 'grid',
    component: DemoUiGridPage,
    data: { label: 'Demo: Grid' },
  },
  {
    path: 'pagination',
    component: DemoUiPaginationPage,
    data: { label: 'Demo: Pagination' },
  },
  {
    path: 'typography',
    component: DemoUiTypographyPage,
    data: { label: 'Demo: Typography' },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,

    UiAlertModule,
    UiBreadcrumbsModule,
    UiButtonModule,
    UiCardModule,
    UiGhostDotsModule,
    UiGhostRectangleModule,
    UiGridModule,
    UiPaginationModule,
  ],
  declarations: [
    DemoUiIndexPage,
    DemoUiAlertPage,
    DemoUiBreadcrumbsPage,
    DemoUiButtonPage,
    DemoUiCardPage,
    DemoUiColorPage,
    DemoUiGhostPage,
    DemoUiGridPage,
    DemoUiPaginationPage,
    DemoUiTypographyPage,
  ],
})
export class UiDemoModule {}
