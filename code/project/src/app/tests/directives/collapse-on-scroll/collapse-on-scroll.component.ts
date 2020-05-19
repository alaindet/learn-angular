import { Component } from '@angular/core';

@Component({
  selector: 'test-collapse-on-scroll',
  templateUrl: './collapse-on-scroll.component.html',
  styleUrls: ['./collapse-on-scroll.component.scss']
})
export class TestCollapseOnScrollComponent {

  mainStyle: { [klass: string]: any } = {};

  onCollapsableHeight(height: number) {
    this.mainStyle = {marginTop: `${height + 16}px`};
  }
}
