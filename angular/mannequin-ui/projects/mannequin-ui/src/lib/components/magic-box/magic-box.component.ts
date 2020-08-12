import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'maq-magic-box',
  templateUrl: './magic-box.component.html',
  styleUrls: ['./magic-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MannequinMagicBoxComponent {

  @Input() color: string = 'black';
}
