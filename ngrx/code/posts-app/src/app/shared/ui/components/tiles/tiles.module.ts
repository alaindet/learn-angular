import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiTileComponent } from './tile/tile.component';
import { UiTilesComponent } from './tiles/tiles.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiTileComponent,
    UiTilesComponent,
  ],
  exports: [
    UiTileComponent,
    UiTilesComponent,
  ],
})
export class UiTilesModule {}
