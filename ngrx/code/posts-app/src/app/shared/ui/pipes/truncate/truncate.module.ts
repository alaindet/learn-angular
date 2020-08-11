import { NgModule } from '@angular/core';

import { UiTruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [UiTruncatePipe],
  exports: [UiTruncatePipe],
})
export class UiTruncatePipeModule {}
