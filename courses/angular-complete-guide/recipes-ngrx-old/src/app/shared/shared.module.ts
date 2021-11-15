import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './components/alert';
import { LoadingSpinnerComponent } from './components/loading-spinner';
import { PlaceholderDirective } from './components/placeholder';
import { DropdownDirective } from './directives/dropdown';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  entryComponents: [AlertComponent],
})
export class SharedModule {}
