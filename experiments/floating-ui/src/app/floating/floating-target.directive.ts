import { Directive, Input, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FloatingPairData, FloatingService } from './floating.service';

@Directive({
  selector: '[appFloatingTarget]',
  exportAs: 'appFloatingTarget',
})
export class FloatingTargetDirective implements OnInit, OnDestroy {

  @Input('appFloatingTarget') name!: string;
  @Input() offset = 5; // 5px

  isOpen = false;

  private destroy$ = new Subject<void>();

  constructor(
    private host: ElementRef,
    private renderer: Renderer2,
    private floatingService: FloatingService,
  ) {}

  ngOnInit(): void {

    // TODO
    console.log('FloatingTargetDirective ngOnInit', this.name);

    this.renderer.setStyle(this.host.nativeElement, 'position', 'fixed');
    this.renderer.setStyle(this.host.nativeElement, 'display', 'none');

    this.floatingService.setTarget(this.name, {
      targetElement: this.host.nativeElement,
      offset: this.offset,
    });

    // TODO
    this.floatingService.getFloatingPair(this.name).data
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(data => {

        if (data?.isOpen && !this.isOpen) {
          this.open(data);
          return;
        }

        if (!data?.isOpen && this.isOpen) {
          this.close();
          return;
        }

        // TODO
        this.updatePosition(data?.x, data?.y);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  open(data: FloatingPairData): void {
    this.isOpen = true;
    this.renderer.setStyle(this.host.nativeElement, 'display', 'block');
    this.updatePosition(data.x, data.y);
  }

  close(): void {
    this.isOpen = false;
    this.renderer.setStyle(this.host.nativeElement, 'display', 'none');
  }

  updatePosition(x: number | null, y: number | null): void {
    // TODO
    this.renderer.setStyle(this.host.nativeElement, 'left', `${x}px`);
    this.renderer.setStyle(this.host.nativeElement, 'top', `${y}px`);
  }
}
