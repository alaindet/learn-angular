import { FloatingTargetPositionConfig, FloatingPositionFunction, FloatingTargetPlacement, FloatingPlacementFunction, FloatingTargetPosition } from '../types';
import * as fromPlacement from './placement';

const placementFunctions: { [key in FloatingTargetPlacement]: FloatingPlacementFunction } = {
  [FloatingTargetPlacement.TopLeft]: fromPlacement.topLeftPlacement,
  [FloatingTargetPlacement.Top]: fromPlacement.topPlacement,
  [FloatingTargetPlacement.TopRight]: fromPlacement.topRightPlacement,
  [FloatingTargetPlacement.Left]: fromPlacement.leftPlacement,
  [FloatingTargetPlacement.Right]: fromPlacement.rightPlacement,
  [FloatingTargetPlacement.BottomLeft]: fromPlacement.bottomLeftPlacement,
  [FloatingTargetPlacement.Bottom]: fromPlacement.bottomPlacement,
  [FloatingTargetPlacement.BottomRight]: fromPlacement.bottomRightPlacement,
};

export const waitFor = async <T = any>(callback: Function, delay = 0) => {
  return new Promise<T>(resolve => setTimeout(() => resolve(callback()), delay));
};

export const getPositionFunction = async (
  config: FloatingTargetPositionConfig,
): Promise<FloatingPositionFunction> => {

  const placement = config?.placement ?? FloatingTargetPlacement.BottomLeft;
  const placementFunction = placementFunctions[placement];

  return async (trigger: HTMLElement, target: HTMLElement): Promise<FloatingTargetPosition> => {
    const triggerRect = trigger.getBoundingClientRect();
    const targetRect = await waitFor<DOMRect>(() => target.getBoundingClientRect());
    const { x, y } = placementFunction(triggerRect, targetRect);
    return new Promise<FloatingTargetPosition>(resolve => resolve({ x, y }));
  };
};
