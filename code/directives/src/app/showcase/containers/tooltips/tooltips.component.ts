import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-tooltips',
  styles: [`
    .tooltips {
      display: flex;
      justify-content: space-around;
      margin: 4rem 0;
    }
  `],
  template: `
    <h2>ng2-tooltip-directive</h2>

    <span tooltip="Tooltip text" placement="top">Tooltip on top</span>
  `
})
export class TooltipsComponent {}
