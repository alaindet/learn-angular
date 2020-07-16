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
import { UiItemGroupModule } from './../components/item-group/item-group.module';
import { DemoUiItemGroupPage } from './pages/item-group/item-group.component';

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
  {
    path: 'item-group',
    component: DemoUiItemGroupPage,
    data: { label: 'Demo: Item group' },
  }
];

@NgModule({
  declarations: [
    DemoUiIndex,
    DemoUiButtonPage,
    DemoUiColorPage,
    DemoUiPaginationPage,
    DemoUiItemGroupPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,

    UiButtonModule,
    UiPaginationModule,
    UiItemGroupModule,
  ],
})
export class UiDemoModule {}
