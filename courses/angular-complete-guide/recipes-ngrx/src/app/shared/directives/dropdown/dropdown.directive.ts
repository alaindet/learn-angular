import { Directive } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown',
})
export class DropdownDirective {

  isOpen = false;

  // Public API
  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
