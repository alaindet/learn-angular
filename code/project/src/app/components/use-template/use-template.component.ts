import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-use-template',
  styles: [``],
  template: `
    <ng-container
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="context"
    ></ng-container>
  `
})
export class UseTemplateComponent {

  @Input() template: TemplateRef<any>;
  @Input() context: any;
}
