import { Component } from '@angular/core';

@Component({
  selector: 'app-test-collapsable-header',
  templateUrl: './collapsable-header.component.html',
  styleUrls: ['./collapsable-header.component.scss'],
})
export class TestCollapsableHeaderComponent {

  mainStyle: { [klass: string]: any } = {};

  onHeaderHeight(height: number) {
    this.mainStyle = {
      'margin-top': `${height}px`,
    };
  }
}
