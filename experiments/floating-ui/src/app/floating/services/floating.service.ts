import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { getPositionFunction } from '../functions';
import { FloatingPair, FloatingTargetPositionConfig, FloatingTargetPosition, FloatingPairConfig, FloatingTargetData } from '../types/types';

@Injectable()
export class FloatingService {

  pairs: { [pairName: string]: FloatingPair } = {};
  private _templates$ = new BehaviorSubject<TemplateRef<void>[]>([]);
  templates$ = this._templates$.asObservable();

  calculatePosition!: (name: string) => Promise<FloatingTargetPosition>;

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
    const { x, y } = await this.calculatePosition(name);
    this.pairs[name].data.next({ isOpen: true, x, y });
  }

  closeTarget(name: string): void {
    this.pairs[name].data.next({ isOpen: false, x: 0, y: 0 });
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
