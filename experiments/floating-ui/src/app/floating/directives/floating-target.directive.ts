import { Directive, Input, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { FloatingService } from '../services/floating.service';
import { FloatingPairData, FloatingPlacement } from '../types/types';

@Directive({
  selector: '[appFloatingTarget]',
  exportAs: 'appFloatingTarget',
})
export class FloatingTargetDirective implements OnInit, OnDestroy {

  @Input('appFloatingTarget') name!: string;
  @Input() placement?: string = FloatingPlacement.BottomRight;
  @Input() offset?: number = 5;

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

    this.floatingService.setTarget(this.name, {
      targetElement: this.host.nativeElement,
      placement: this.placement as FloatingPlacement,
      offset: this.offset,
    });

    this.floatingService.getFloatingPair(this.name).data
      .pipe(
        takeUntil(this.destroy$),
        filter(data => data !== null),
        map(data => data as FloatingPairData),
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

  open(data: FloatingPairData): void {
    this.isOpen = true;
    this.renderer.setStyle(this.host.nativeElement, 'display', 'block');
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
