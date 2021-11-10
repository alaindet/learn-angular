import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})
export class GameControlsComponent {

  @Output() startGame = new EventEmitter<void>();
  @Output() stopGame = new EventEmitter<void>();
  @Output() resetGame = new EventEmitter<void>();

  onStartGame() {
    this.startGame.emit();
  }

  onStopGame() {
    this.stopGame.emit();
  }

  onResetGame() {
    this.resetGame.emit();
  }

}
