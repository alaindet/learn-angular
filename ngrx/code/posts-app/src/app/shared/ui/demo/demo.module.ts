import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UiAlertModule } from './../components/alert/alert.module';
import { UiBreadcrumbsModule } from './../components/breadcrumbs/breadcrumbs.module';
import { UiButtonModule } from './../components/button/button.module';
import { UiCardModule } from './../components/card/card.module';
import { UiChipModule } from './../components/chip/chip.module';
import { UiFormCheckboxModule } from './../components/form/checkbox/checkbox.module';
import { UiGhostDotsModule } from './../components/ghost/dots/dots.module';
import { UiGhostRectangleModule } from './../components/ghost/rectangle/rectangle.module';
import { UiPaginationModule } from './../components/pagination/pagination.module';
import { UiTilesModule } from './../components/tiles/tiles.module';

import { DemoUiIndexPage } from './pages/index/index.component';
import { DemoUiAlertPage } from './pages/alert/alert.component';
import { DemoUiChipPage } from './pages/chip/chip.component';
import { DemoUiColorPage } from './pages/color/color.component';
import { DemoUiBreadcrumbsPage } from './pages/breadcrumbs/breadcrumbs.component';
import { DemoUiButtonPage } from './pages/button/button.component';
import { DemoUiCardPage } from './pages/card/card.component';
import { DemoUiFormCheckboxPage } from './pages/form/checkbox/checkbox.component';
import { DemoUiGhostPage } from './pages/ghost/ghost.component';
import { DemoUiPaginationPage } from './pages/pagination/pagination.component';
import { DemoUiTilesPage } from './pages/tiles/tiles.component';
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
    path: 'chip',
    component: DemoUiChipPage,
    data: { label: 'Demo: Chip' },
  },
  {
    path: 'color',
    component: DemoUiColorPage,
    data: { label: 'Demo: Color' },
  },
  {
    path: 'form/checkbox',
    component: DemoUiFormCheckboxPage,
    data: { label: 'Demo: Form checkbox' },
  },
  {
    path: 'ghost',
    component: DemoUiGhostPage,
    data: { label: 'Demo: Ghost' },
  },
  {
    path: 'pagination',
    component: DemoUiPaginationPage,
    data: { label: 'Demo: Pagination' },
  },
  {
    path: 'tiles',
    component: DemoUiTilesPage,
    data: { label: 'Demo: Tiles' },
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
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,

    UiAlertModule,
    UiBreadcrumbsModule,
    UiButtonModule,
    UiCardModule,
    UiChipModule,
    UiFormCheckboxModule,
    UiGhostDotsModule,
    UiGhostRectangleModule,
    UiPaginationModule,
    UiTilesModule,
  ],
  declarations: [
    DemoUiIndexPage,
    DemoUiAlertPage,
    DemoUiBreadcrumbsPage,
    DemoUiButtonPage,
    DemoUiCardPage,
    DemoUiChipPage,
    DemoUiColorPage,
    DemoUiFormCheckboxPage,
    DemoUiGhostPage,
    DemoUiPaginationPage,
    DemoUiTilesPage,
    DemoUiTypographyPage,
  ],
})
export class UiDemoModule {}
