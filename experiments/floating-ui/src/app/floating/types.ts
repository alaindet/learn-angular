import { TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Position {
  x: number;
  y: number;
}

export enum FloatingPlacement {
  TopLeft = 'top-left',
  Top = 'top',
  TopRight = 'top-right',
  Left = 'left',
  Right = 'right',
  BottomLeft = 'bottom-left',
  Bottom = 'bottom',
  BottomRight = 'bottom-right',
}

export interface PositionFunctionConfig {
  placement?: FloatingPlacement;
  offset?: number;
}

export type PositionFunction = (
  trigger: HTMLElement,
  target: HTMLElement,
) => Promise<Position>;

export type PlacementFunction = (trigger: DOMRect, target: DOMRect) => Position;

export interface FloatingPairConfig extends PositionFunctionConfig {
  triggerElement: HTMLElement | null;
  targetElement: HTMLElement | null;
}

export interface FloatingPairData {
  isOpen: boolean;
  x: number | null;
  y: number | null;
}

export interface FloatingPair {
  config: FloatingPairConfig;
  data: BehaviorSubject<FloatingPairData | null>;
  targetTemplate: TemplateRef<void> | null;
}
