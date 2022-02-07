import { Directive, Input, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { FloatingService } from '../services/floating.service';
import { FloatingTargetPlacement, FloatingTargetData } from '../types';

@Directive({
  selector: '[appFloatingTarget]',
  exportAs: 'appFloatingTarget',
})
export class FloatingTargetDirective implements OnInit, OnDestroy {

  @Input('appFloatingTarget') name!: string;
  @Input() placement?: string = FloatingTargetPlacement.BottomRight;
  @Input() offsetY?: number | string = 0;
  @Input() offsetX?: number | string = 0;

  isOpen = false;

  private destroy$ = new Subject<void>();

  constructor(
    private host: ElementRef,
    private renderer: Renderer2,
    private floatingService: FloatingService,
  ) {}

  ngOnInit(): void {

    this.renderer.setStyle(this.host.nativeElement, 'position', 'fixed');
    this.renderer.setStyle(this.host.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.host.nativeElement, 'visibility', 'hidden');
    this.renderer.setStyle(this.host.nativeElement, 'transform', 'translate3d(0,0,0)');

    this.floatingService.setTarget(this.name, {
      targetElement: this.host.nativeElement,
      placement: this.placement as FloatingTargetPlacement,
      offsetX: +(this.offsetX ?? 0),
      offsetY: +(this.offsetY ?? 0),
    });

    this.floatingService.getFloatingPair(this.name).data
      .pipe(
        takeUntil(this.destroy$),
        filter(data => data !== null),
        map(data => data as FloatingTargetData),
      )
      .subscribe(data => {

        if (data.isOpen && !this.isOpen) {
          this.open(data);
          return;
        }

        if (!data.isOpen && this.isOpen) {
          this.close();
          return;
        }

        this.updatePosition(data.x, data.y);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  open(data: FloatingTargetData): void {
    this.isOpen = true;
    this.renderer.setStyle(this.host.nativeElement, 'visibility', 'initial');
    this.updatePosition(data.x, data.y);
  }

  close(): void {
    this.isOpen = false;
    this.renderer.setStyle(this.host.nativeElement, 'visibility', 'hidden');
  }

  updatePosition(x: number | null, y: number | null): void {
    if (x !== null) {
      this.renderer.setStyle(this.host.nativeElement, 'left', `${x}px`);
    }

    if (y !== null) {
      this.renderer.setStyle(this.host.nativeElement, 'top', `${y}px`);
    }
  }
}
