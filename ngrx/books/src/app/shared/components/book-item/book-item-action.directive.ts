import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appBookItemAction]',
})
export class BookItemActionDirective {
  @Input('appBookItemAction') name!: string;

  @Output() clicked = new EventEmitter<string>();

  @HostListener('click')
  onClick(): void {
    this.clicked.emit(this.name);
  }
}
