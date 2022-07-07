import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { A11yMenuContainerDirective } from './menu-container.directive';
import { A11yMenuDirective } from './menu.directive';
import { A11yMenuHandleDirective } from './handle.directive';
import { A11yMenuItemDirective } from './item.directive';
import { A11yMenuItemContainerDirective } from './item-container.directive'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    A11yMenuHandleDirective,
    A11yMenuDirective,
    A11yMenuItemContainerDirective,
    A11yMenuItemDirective,
    A11yMenuContainerDirective,
  ],
  exports: [
    A11yMenuHandleDirective,
    A11yMenuDirective,
    A11yMenuItemContainerDirective,
    A11yMenuItemDirective,
    A11yMenuContainerDirective,
  ],
})
export class A11yMenuModule {}
