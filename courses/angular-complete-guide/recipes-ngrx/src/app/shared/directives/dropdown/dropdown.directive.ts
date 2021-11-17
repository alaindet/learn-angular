import { ContentChild, Directive, HostListener } from '@angular/core';

import { DropdownHandleDirective } from './dropdown-handle.directive';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown',
})
export class DropdownDirective {

  @ContentChild(DropdownHandleDirective)
  handle: DropdownHandleDirective;

  isOpen = false;

  // Public API
  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickAway(event: MouseEvent): void {

    if (!this.handle) {
      this.isOpen = false;
      return;
    }

    if (!this.handle.host.nativeElement.contains(event.target)) {
      this.isOpen = false;
      return;
    }

    this.toggle();
  }
}
