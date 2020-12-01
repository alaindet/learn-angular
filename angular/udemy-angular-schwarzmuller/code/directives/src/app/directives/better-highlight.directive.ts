import {
  Directive,
  // Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() baseColor = 'transparent';
  @Input() highlightColor = '#a0e0f0';
  @HostBinding('style.backgroundColor') backgroundColor = this.baseColor;

  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // With Renderer2
    // this.styleBackgroundColor(this.baseColor);

    console.log('BetterHighlightDirective.baseColor');

    // With @HostBinding
    this.backgroundColor = this.baseColor;
  }

  @HostListener('mouseenter') onMouseEnter(event: Event) {
    // console.log('BetterHighlightDirective.onMouseEnter()');

    // With Renderer2
    // this.styleBackgroundColor(this.highlightColor);

    // With @HostBinding
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    // console.log('BetterHighlightDirective.onMouseLeave()');

    // With Renderer 2
    // this.styleBackgroundColor('#a0ffa0');

    // With @HostBinding
    this.backgroundColor = this.baseColor;
  }

  // styleBackgroundColor(color: string) {
  //   const elementToStyle = this.elementRef.nativeElement;
  //   const cssPropertyName = 'background-color';
  //   const cssPropertyValue = color;
  //   const rendererFlags = null;

  //   this.renderer.setStyle(
  //     elementToStyle,
  //     cssPropertyName,
  //     cssPropertyValue,
  //     rendererFlags
  //   );
  // }


}
