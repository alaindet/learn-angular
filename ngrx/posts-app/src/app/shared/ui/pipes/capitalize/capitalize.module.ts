import { NgModule } from '@angular/core';

import { UiCapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [UiCapitalizePipe],
  exports: [UiCapitalizePipe],
})
export class UiCapitalizePipeModule {}
