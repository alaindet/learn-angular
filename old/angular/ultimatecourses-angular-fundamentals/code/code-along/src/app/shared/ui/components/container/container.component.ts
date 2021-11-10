import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-container',
  template: `
    <div [ngClass]="[
      'container',
      (hasBackground === '') ? '--has-background' : ''
    ]">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .container {
      margin: 0 auto;
      max-width: 960px;
    }
    .container.--has-background {
      background-color: #f0f0f0;
      padding: .5rem;
      border-radius: .5rem;
    }
  `]
})
export class ContainerComponent {

  @Input() hasBackground: string;

}
