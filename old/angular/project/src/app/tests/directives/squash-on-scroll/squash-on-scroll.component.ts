import { Component } from '@angular/core';

@Component({
  selector: 'test-squash-on-scroll',
  templateUrl: './squash-on-scroll.component.html',
  styleUrls: ['./squash-on-scroll.component.scss']
})
export class TestSquashOnScrollComponent {

  mainStyle: { [klass: string]: any } = {};

  onSquashableHeight(height: number) {
    const marginTop = `${ height + 16 }px`;
    this.mainStyle = { marginTop };
  }
}
