import { Component } from '@angular/core';

@Component({
  templateUrl: './card.component.html',
})
export class DemoUiCardPage {

  onDismiss() {
    console.log('onDismiss');
  }
}
