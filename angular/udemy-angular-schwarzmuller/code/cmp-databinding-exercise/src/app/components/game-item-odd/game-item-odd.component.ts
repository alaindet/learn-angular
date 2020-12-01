import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-item-odd',
  templateUrl: './game-item-odd.component.html',
  styleUrls: ['./game-item-odd.component.css']
})
export class GameItemOddComponent {

  @Input('item') item: number;

}
