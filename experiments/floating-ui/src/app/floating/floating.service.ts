import { Injectable, TemplateRef } from '@angular/core';
import { Observable, BehaviorSubject, of, forkJoin, tap } from 'rxjs';
import { computePosition, offset, flip } from '@floating-ui/dom';

export interface FloatingPairConfig {
  triggerElement: HTMLElement | null;
  targetElement: HTMLElement | null;
  offset?: number;
}

export interface FloatingPairData {
  isOpen: boolean;
  x: number | null;
  y: number | null;
}

export interface FloatingPair {
  config: FloatingPairConfig;
  data: FloatingPairData;
  targetTemplate: TemplateRef<void>;
}

@Injectable()
export class FloatingService {

  // pairsConfig: { [pairName: string]: FloatingPairConfig } = {};
  // pairsData: { [pairName: string]: BehaviorSubject<FloatingPairData> } = {};
  // pairsTemplates: { [pairName: string]: BehaviorSubject<TemplateRef<void> | null> } = {};
  pairs: { [pairName: string]: FloatingPair } = {};

  getFloatingPairConfig(name: string): FloatingPairConfig {
    return this.pairsConfig[name];
  }

  getFloatingPairData(name: string): Observable<FloatingPairData> {
    return this.pairsData[name].asObservable();
  }

  setTemplate(name: string, template: TemplateRef<void>): void {
    this.createPairIfNeeded(name);
    this.pairsTemplates[name].next(template);
  }

  setTrigger(name: string, config: any): void {
    this.createPairIfNeeded(name);
    this.pairsConfig[name].triggerElement = config.element;
  }

  setTarget(name: string, config: any): void {
    this.createPairIfNeeded(name);
    this.pairsConfig[name].targetElement = config.element;
  }

  toggleTarget(name: string): void {
    const pair = this.pairsData[name].getValue();
    pair.isOpen ? this.closeTarget(name) : this.openTarget(name);
  }

  async openTarget(name: string): Promise<void> {
    const { x, y } = await this.computePosition(name);
    this.pairsData[name].next({
      isOpen: true,
      x,
      y,
    });
  }

  closeTarget(name: string): void {
    this.pairsData[name].next({
      isOpen: false,
      x: null,
      y: null,
    });
  }

  private createPairIfNeeded(name: string): void {
    if (!this.pairsConfig[name]) {
      this.pairsConfig[name] = {
        targetElement: null,
        triggerElement: null,
      };
    }

    if (!this.pairsData[name]) {
      this.pairsData[name] = new BehaviorSubject({
        isOpen: false,
        x: null,
        y: null,
      } as FloatingPairData);
    }

    if (!this.pairsTemplates[name]) {
      this.pairsTemplates[name] = new BehaviorSubject<TemplateRef<void> | null>(null);
    }
  }

  private async computePosition(name: string): Promise<{
    x: number;
    y: number;
  }> {
    const trigger = this.pairsConfig[name].triggerElement as HTMLElement;
    const target = this.pairsConfig[name].targetElement as HTMLElement;

    // TODO
    console.log('trigger', trigger);
    console.log('target', target);

    const targetOffset = this.pairsConfig[name]?.offset ?? 0;

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
