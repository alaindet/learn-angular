import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CounterComponent } from './counter.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterComponentModule {}
