import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponentModule } from 'src/app/common/components';
import { CounterSubjectFeatureComponent } from './counter-subject.component';

@NgModule({
  imports: [
    CommonModule,
    CounterComponentModule,
  ],
  declarations: [CounterSubjectFeatureComponent],
  exports: [CounterSubjectFeatureComponent],
})
export class CounterSubjectFeatureModule {}
