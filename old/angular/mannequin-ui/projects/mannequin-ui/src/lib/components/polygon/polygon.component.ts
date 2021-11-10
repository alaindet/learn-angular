import { Component, Input } from '@angular/core';

@Component({
  selector: 'maq-polygon',
  styleUrls: ['./polygon.component.scss'],
  template: `
    <div class="polygon shape-{{ shape }}"></div>
  `
})
export class MannequinPolygonComponent {
  @Input() shape: 'square' | 'pentagon' | 'hexagon' | 'circle' = 'square';
}
