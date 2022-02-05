import { FloatingTargetPositionConfig, FloatingTargetPlacement, FloatingPlacementFunction, FloatingTargetPosition, FloatingOffsetFunction } from '../types';
import * as fromPlacement from './placement';

export const getPlacementFunction = (
  config: FloatingTargetPositionConfig,
): FloatingPlacementFunction => {
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

  const placement = config?.placement ?? FloatingTargetPlacement.BottomLeft;
  return placementFunctions[placement];
};

export const getOffsetFunction = (
  config: FloatingTargetPositionConfig,
): FloatingOffsetFunction => {
  return (pos: FloatingTargetPosition) => ({
    x: pos.x + (config?.offsetX ?? 0),
    y: pos.y + (config?.offsetY ?? 0),
  });
};
