import { Component, Input } from '@angular/core';

import { Booleanish } from './../../decorators/booleanish.decorator';

@Component({
  selector: 'test-booleanish',
  template: `
    <ul>
      <li>flag1: {{ flag1 }}</li>
      <li>flag2: {{ flag2 }}</li>
      <li>flag3: {{ flag3 }}</li>
    </ul>
  `
})
@Booleanish
export class TestBooleanishComponent {

  @Input() flag1: string | boolean;
  @Input() flag2: string | boolean;
  @Input() flag3: string | boolean;

  ngOnInit() {
    this['booleanish']('flag1', 'flag2', 'flag3');
    this.logFlags();
  }

  private logFlags() {
    console.log('flag1', this.flag1);
    console.log('flag2', this.flag2);
    console.log('flag3', this.flag3);
  }
}
