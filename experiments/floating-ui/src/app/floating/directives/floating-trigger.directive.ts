import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FloatingService } from '../services';

@Directive({
  selector: '[appFloatingTrigger]',
  exportAs: 'appFloatingTrigger',
})
export class FloatingTriggerDirective implements OnInit, OnDestroy {

  @Input('appFloatingTrigger') name!: string;
  @Input() triggerOn: 'click' | 'hover' = 'click';

  private destroy$ = new Subject<void>();

  constructor(
    private host: ElementRef,
    private floatingService: FloatingService,
  ) {}

  ngOnInit(): void {
    this.floatingService.setTrigger(this.name, {
      triggerElement: this.host.nativeElement,
    });

    switch (this.triggerOn) {
      case 'click':
        this.handleClickTrigger();
        break;
      case 'hover':
        this.handleHoverTrigger();
        break;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private handleClickTrigger(): void {
    fromEvent(this.host.nativeElement, 'click')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.floatingService.toggleTarget(this.name));
  }

  private handleHoverTrigger(): void {
    fromEvent(this.host.nativeElement, 'mouseenter')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.floatingService.openTarget(this.name));

    fromEvent(this.host.nativeElement, 'mouseleave')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.floatingService.closeTarget(this.name));
  }
}
