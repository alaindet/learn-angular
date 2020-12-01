import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentItem = 0;
  items: number[] = [];
  timer: any;

  onStartGame(): void {
    this.timer = setInterval(this.gameLoop.bind(this), 1000);
  }

  onStopGame(): void {
    clearInterval(this.timer);
  }

  onResetGame(): void {
    this.onStopGame();
    this.items = [];
  }

  gameLoop() {
    this.items.push(++this.currentItem);
  }

}
