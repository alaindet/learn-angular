import { PositionFunctionConfig, PositionFunction, PlacementFunction, FloatingPlacement, Position } from '../types/types';
import * as fromPlacement from './placement';

const placementFunctions: { [key in FloatingPlacement]: PlacementFunction } = {
  [FloatingPlacement.TopLeft]: fromPlacement.topLeftPlacement,
  [FloatingPlacement.Top]: fromPlacement.topPlacement,
  [FloatingPlacement.TopRight]: fromPlacement.topRightPlacement,
  [FloatingPlacement.Left]: fromPlacement.leftPlacement,
  [FloatingPlacement.Right]: fromPlacement.rightPlacement,
  [FloatingPlacement.BottomLeft]: fromPlacement.bottomLeftPlacement,
  [FloatingPlacement.Bottom]: fromPlacement.bottomPlacement,
  [FloatingPlacement.BottomRight]: fromPlacement.bottomRightPlacement,
};

export const waitFor = async <T = any>(callback: Function, delay = 0) => {
  return new Promise<T>(resolve => setTimeout(() => resolve(callback()), delay));
};

export const getPositionFunction = async (
  config: PositionFunctionConfig,
): Promise<PositionFunction> => {

  const placement = config?.placement ?? FloatingPlacement.BottomLeft;
  const placementFunction = placementFunctions[placement];

  return async (trigger: HTMLElement, target: HTMLElement): Promise<Position> => {
    const triggerRect = trigger.getBoundingClientRect();
    const targetRect = await waitFor<DOMRect>(() => target.getBoundingClientRect());
    const { x, y } = placementFunction(triggerRect, targetRect);
    return new Promise<Position>(resolve => resolve({ x, y }));
  };
};
