import { Component } from '@angular/core';
import { A11yMenuFocusable } from './a11y-menu/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  consoleLog = console.log;

  lastConfirmed!: string;

  items: { value: string; label: string; }[] = [
    { value: 'apples', label: 'Apples' },
    { value: 'bananas', label: 'Bananas' },
    { value: 'blue-berries', label: 'Blue Berries' },
    { value: 'cherries', label: 'Cherries' },
    { value: 'coconut', label: 'Coconut' },
    { value: 'pineapple', label: 'Pineapple' },
  ];

  onConfirm(event: A11yMenuFocusable) {
    this.lastConfirmed = event as string;
  }
}
