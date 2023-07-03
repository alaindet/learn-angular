import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  host: { class: 'ui-breadcrumbs' },
  template: `<ng-content></ng-content>`,
  styles: [`
    .ui-breadcrumbs {
      display: flex;
      align-items: center;
      gap: 1rem;
      list-style-type: none;
    }
  `],
})
export class BreadcrumbsComponent {
  // ...
}
