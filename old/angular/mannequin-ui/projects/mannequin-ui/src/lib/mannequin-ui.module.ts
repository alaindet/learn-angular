import { NgModule } from '@angular/core';

import { MannequinMagicBoxModule } from './components/magic-box/magic-box.module';
import { MannequinAlertModule} from './components/alert/alert.module';
import { MannequinPolygonModule } from './components/polygon/polygon.module';

@NgModule({
  imports: [
    MannequinMagicBoxModule,
    MannequinAlertModule,
    MannequinPolygonModule,
  ],
  exports: [
    MannequinMagicBoxModule,
    MannequinAlertModule,
    MannequinPolygonModule,
  ],
})
export class MannequinUiModule {}
