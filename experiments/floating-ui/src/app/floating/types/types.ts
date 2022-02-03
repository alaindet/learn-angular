import { TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface FloatingTargetPosition {
  x: number;
  y: number;
}

export enum FloatingTargetPlacement {
  TopLeft = 'top-left',
  Top = 'top',
  TopRight = 'top-right',
  Left = 'left',
  Right = 'right',
  BottomLeft = 'bottom-left',
  Bottom = 'bottom',
  BottomRight = 'bottom-right',
}

export interface FloatingTargetPositionConfig {
  placement?: FloatingTargetPlacement;
  offset?: number;
}

export type FloatingPositionFunction = (
  trigger: HTMLElement,
  target: HTMLElement
) => Promise<FloatingTargetPosition>;

export type FloatingPlacementFunction = (
  trigger: DOMRect,
  target: DOMRect
) => FloatingTargetPosition;

export interface FloatingPairConfig extends FloatingTargetPositionConfig {
  triggerElement: HTMLElement | null;
  targetElement: HTMLElement | null;
}

export interface FloatingTargetData extends FloatingTargetPosition {
  isOpen: boolean;
}

export interface FloatingPair {
  config: FloatingPairConfig;
  data: BehaviorSubject<FloatingTargetData | null>;
  targetTemplate: TemplateRef<void> | null;
}
