import { Component } from '@angular/core';

@Component({
  templateUrl: './chip.component.html',
})
export class DemoUiChipPage {
  onDismiss() {
    console.log('dismissed');
    alert('dismissed');
  }
}
