import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['./../../../../dist/mannequin-lib/assets/_style.scss'],
  template: `
    <h1>Mannequin demo app</h1>
    <mq-mannequin-lib>Some boxed content from the ui</mq-mannequin-lib>
  `,
})
export class AppComponent {

}
