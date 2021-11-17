import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdownHandle]',
})
export class DropdownHandleDirective {
  constructor(
    public host: ElementRef,
  ) {}
}
