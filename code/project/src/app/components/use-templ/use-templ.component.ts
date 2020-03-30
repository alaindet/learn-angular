import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-use-templ',
  styles: [``],
  template: `
    <ng-container
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="context"
    ></ng-container>
  `
})
export class UseTemplComponent {

  @Input() template: TemplateRef<any>;
  @Input() context: any;
}
