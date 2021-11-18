import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './components/alert';
import { LoadingSpinnerComponent } from './components/loading-spinner';
import { SkeletonComponent } from './components/skeleton';
import { PlaceholderDirective } from './directives/placeholder';
import { DropdownDirective, DropdownHandleDirective } from './directives/dropdown';
import { EncodeUriPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SkeletonComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    DropdownHandleDirective,
    EncodeUriPipe,
  ],
  exports: [
    SkeletonComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    DropdownHandleDirective,
    EncodeUriPipe,
  ],
  entryComponents: [
    AlertComponent,
  ],
})
export class SharedModule {}
