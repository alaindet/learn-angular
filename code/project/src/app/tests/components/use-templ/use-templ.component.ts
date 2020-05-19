import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'test-use-templ',
  styles: [``],
  template: `
    <app-use-templ [template]="templ" [context]="context"></app-use-templ>
    <app-use-templ [template]="templRef" [context]="context"></app-use-templ>
    <ng-template #templ let-name="name">I'm {{ name }}</ng-template>
  `
})
export class TestUseTemplComponent {

  @ViewChild('templ', { read: TemplateRef, static: true })
  public templRef: TemplateRef<any>;

  public context = { name: 'Alain', };
}
