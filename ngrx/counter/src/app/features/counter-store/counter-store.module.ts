import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponentModule } from 'src/app/common/components';
import { CounterStoreFeatureComponent } from './counter-store.component';

@NgModule({
  imports: [
    CommonModule,
    CounterComponentModule,
  ],
  declarations: [CounterStoreFeatureComponent],
  exports: [CounterStoreFeatureComponent],
})
export class CounterStoreFeatureModule {}
