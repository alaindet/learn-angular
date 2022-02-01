import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { computePosition, offset, flip } from '@floating-ui/dom';

import { calculatePosition } from './functions';

// TODO
export interface FloatingPairConfig {
  triggerElement: HTMLElement | null;
  targetElement: HTMLElement | null;
  offset?: number;
}

// TODO
export interface FloatingPairData {
  isOpen: boolean;
  x: number | null;
  y: number | null;
}

// TODO
export interface FloatingPair {
  config: FloatingPairConfig;
  data: BehaviorSubject<FloatingPairData | null>;
  targetTemplate: TemplateRef<void> | null;
}

@Injectable()
export class FloatingService {

  pairs: { [pairName: string]: FloatingPair } = {};
  private _templates$ = new BehaviorSubject<TemplateRef<void>[]>([]);
  templates$ = this._templates$.asObservable();

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
    this.pairs[name].config = { ...this.pairs[name].config, ...config };
  }

  toggleTarget(name: string): void {
    const pair = this.pairs[name];
    const data = pair.data.getValue() as FloatingPairData;
    data?.isOpen ? this.closeTarget(name) : this.openTarget(name);
  }

  async openTarget(name: string): Promise<void> {
    const { x, y } = await this.computePosition(name);
    this.pairs[name].data.next({ isOpen: true, x, y });
  }

  closeTarget(name: string): void {
    this.pairs[name].data.next({ isOpen: false, x: null, y: null });
  }

  private createPairIfNeeded(name: string): void {
    if (!this.pairs[name]) {
      this.pairs[name] = {
        config: {
          triggerElement: null,
          targetElement: null,
          offset: 0,
        },
        data: new BehaviorSubject<FloatingPairData | null>(null),
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

  private async computePosition(name: string): Promise<{
    x: number;
    y: number;
  }> {
    const trigger = this.pairs[name].config.triggerElement as HTMLElement;
    const target = this.pairs[name].config.targetElement as HTMLElement;

    const targetOffset = this.pairs[name].config.offset;

    const { x, y } = await computePosition(trigger, target, {
      placement: 'bottom-start',
      middleware: [
        offset(targetOffset),
        flip(),
      ],
    });

    return { x, y };
  }
}
