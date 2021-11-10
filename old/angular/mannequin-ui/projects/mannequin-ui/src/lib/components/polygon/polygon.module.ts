import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MannequinPolygonComponent } from './polygon.component';

@NgModule({
  declarations: [MannequinPolygonComponent],
  imports: [CommonModule],
  exports: [MannequinPolygonComponent],
})
export class MannequinPolygonModule {}
