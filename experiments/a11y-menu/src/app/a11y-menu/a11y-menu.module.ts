import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { A11yMenuContainerDirective } from './container.directive';
import { A11yMenuHandleDirective } from './handle.directive';
import { A11yMenuItemDirective } from './item.directive';
import { A11yMenuDirective } from './menu.directive';
import { A11yPresentationDirective } from './presentation.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    A11yMenuContainerDirective,
    A11yMenuHandleDirective,
    A11yMenuItemDirective,
    A11yMenuDirective,
    A11yPresentationDirective,
  ],
  exports: [
    A11yMenuContainerDirective,
    A11yMenuHandleDirective,
    A11yMenuItemDirective,
    A11yMenuDirective,
    A11yPresentationDirective,
  ],
})
export class A11yMenuModule {}
