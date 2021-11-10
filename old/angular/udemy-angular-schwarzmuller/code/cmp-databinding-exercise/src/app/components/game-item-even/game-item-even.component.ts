import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-item-even',
  templateUrl: './game-item-even.component.html',
  styleUrls: ['./game-item-even.component.css']
})
export class GameItemEvenComponent {

  @Input('item') item: number;

}
