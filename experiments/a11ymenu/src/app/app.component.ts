import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  items: { label: string; action: string }[] = [
    { label: 'Alfred', action: 'alfred' },
    { label: 'Ashley', action: 'ashley', },
    { label: 'Bigsby', action: 'bigsby' },
    { label: 'Carl', action: 'carl' },
    { label: 'Charlize', action: 'charlize' },
    { label: 'Felicity', action: 'felicity' },
    { label: 'Frank', action: 'frank' },
  ];

  onConfirmItem(url: string) {
    console.log('onConfirmItem', url);
  }
}
