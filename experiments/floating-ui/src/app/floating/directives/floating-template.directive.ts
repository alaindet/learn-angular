import { Directive, Input, TemplateRef } from '@angular/core';

import { FloatingService } from './floating.service';

@Directive({
  selector: '[appFloatingTemplate]',
})
export class FloatingTemplateDirective {

  @Input('appFloatingTemplate') name!: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private floatingService: FloatingService,
  ) {}

  ngOnInit(): void {
    this.floatingService.setTemplate(this.name, this.templateRef);
  }
}
