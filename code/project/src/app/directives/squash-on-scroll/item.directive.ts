import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

import { SquashOnScroll } from './squash-on-scroll.enum';

@Directive({
  selector: '[squashOnScroll]'
})
export class SquashOnScrollItemDirective {

  @Input() squashOnScroll: SquashOnScroll = SquashOnScroll.Collapse;

  squashed = false;
  initialHeight: string;

  private defaultStyle = {
    'transition': 'opacity 0.2s linear',
    'opacity': '1',
  };

  private squashedStyle = {
    'overflow': 'hidden',
    'margin': '0',
    'width': '0',
    'height': '0',
    'opacity': '0',
  };

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.setStyle(this.defaultStyle);

    // Initially squash "inverted" items
    if (this.squashOnScroll === SquashOnScroll.Expand) {
      this.squash();
    }
  }

  toggleSquashedState() {
    this.squashed ? this.expand() : this.squash();
  }

  private squash() {
    this.squashed = true;
    this.renderer.removeStyle(this.element.nativeElement, 'height');
    this.setStyle(this.squashedStyle);
  }

  private expand() {
    this.squashed = false;
    for (const rule of Object.keys(this.squashedStyle)) {
      this.renderer.removeStyle(this.element.nativeElement, rule);
    }
  }

  private setStyle(style: { [klass: string]: any }) {
    for (const [rule, value] of Object.entries(style)) {
      this.renderer.setStyle(this.element.nativeElement, rule, value);
    }
  }
}
