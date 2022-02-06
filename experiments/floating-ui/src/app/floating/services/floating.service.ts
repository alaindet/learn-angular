import { Injectable, OnDestroy, TemplateRef } from '@angular/core';
import { animationFrameScheduler, BehaviorSubject, debounceTime, fromEvent, Subscription, take } from 'rxjs';

import { getPositionFunction, getScrollParent } from '../functions';
import { FloatingPair, FloatingTargetPositionConfig, FloatingTargetPosition, FloatingPairConfig, FloatingTargetData } from '../types/types';

const OPTIMIZED_FPS = 1000 / 60;

@Injectable()
export class FloatingService implements OnDestroy {

  private _templates$ = new BehaviorSubject<TemplateRef<void>[]>([]);
  private subs: { [sub: string]: Subscription } = {};

  pairs: { [pairName: string]: FloatingPair } = {};
  templates$ = this._templates$.asObservable();
  calculatePosition!: (name: string) => Promise<FloatingTargetPosition>;

  ngOnDestroy(): void {
    Object.values(this.subs).forEach(sub => sub.unsubscribe());
  }

  async initPositionFunction(config: FloatingTargetPositionConfig): Promise<void> {
    const positionFn = await getPositionFunction(config);
    this.calculatePosition = (name: string): Promise<FloatingTargetPosition> => {
      const trigger = this.pairs[name].config.triggerElement as HTMLElement;
      const target = this.pairs[name].config.targetElement as HTMLElement;
      return positionFn(trigger, target);
    };
  }

  getFloatingPair(name: string): FloatingPair {
    return this.pairs[name];
  }

  setTemplate(name: string, template: TemplateRef<void>): void {
    this.createPairIfNeeded(name);
    this.pairs[name].targetTemplate = template;
    this.updateTemplates();
  }

  setTrigger(name: string, config: Partial<FloatingPairConfig>): void {
    this.createPairIfNeeded(name);
    this.pairs[name].config = { ...this.pairs[name].config, ...config };
  }

  setTarget(name: string, config: Partial<FloatingPairConfig>): void {
    this.createPairIfNeeded(name);
    const { triggerElement, targetElement, ...positionConfig } = config;
    this.initPositionFunction(positionConfig as FloatingTargetPositionConfig);
    this.pairs[name].config = { ...this.pairs[name].config, ...config };
  }

  toggleTarget(name: string): void {
    const pair = this.pairs[name];
    const data = pair.data.getValue() as FloatingTargetData;
    data?.isOpen ? this.closeTarget(name) : this.openTarget(name);
  }

  async openTarget(name: string): Promise<void> {
    this.addExternalListeners(name);
    this.updatePosition(name);
  }

  closeTarget(name: string): void {
    this.removeExternalListeners(name);
    this.pairs[name].data.next({ isOpen: false, x: 0, y: 0 });
  }

  private addExternalListeners(name: string): void {
    this.removeExternalListeners(name);
    const trigger = this.pairs[name].config.triggerElement as HTMLElement;
    const scrollParent = getScrollParent(trigger);

    this.subs[`scroll_${name}`] = fromEvent(scrollParent, 'scroll')
      .pipe(debounceTime(OPTIMIZED_FPS, animationFrameScheduler))
      .subscribe(() => this.updatePosition(name));

    this.subs[`resize_${name}`] = fromEvent(window, 'resize')
      .pipe(take(1))
      .subscribe(() => this.closeTarget(name));
  }

  private removeExternalListeners(name: string): void {
    this.subs[`scroll_${name}`]?.unsubscribe();
    this.subs[`resize_${name}`]?.unsubscribe();
  }

  private async updatePosition(name: string): Promise<void> {
    const { x, y } = await this.calculatePosition(name);
    this.pairs[name].data.next({ isOpen: true, x, y });
  }

  private createPairIfNeeded(name: string): void {
    if (!this.pairs[name]) {
      this.pairs[name] = {
        config: {
          triggerElement: null,
          targetElement: null,
          offsetX: 0,
          offsetY: 0,
        },
        data: new BehaviorSubject<FloatingTargetData | null>(null),
        targetTemplate: null,
      };
    }
  }

  private updateTemplates(): void {

    const templates: TemplateRef<void>[] = [];

    for (const pair of Object.values(this.pairs)) {
      if (pair.targetTemplate !== null) {
        templates.push(pair.targetTemplate);
      }
    }

    this._templates$.next(templates);
  }
}
