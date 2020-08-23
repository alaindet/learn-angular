import { Component } from '@angular/core';

import { UiCardEvents } from './../../../components/card/card.interface';

@Component({
  templateUrl: './card.component.html',
})
export class DemoUiCardPage {

  onDismiss(dismissing: UiCardEvents['dismissing']) {
    dismissing.animation();
    setTimeout(() => console.log('onDismissed'), dismissing.delay);
  }
}
