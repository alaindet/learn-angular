import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {
  @Input() width = '100%';
}
