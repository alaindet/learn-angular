import { FloatingPositionFunction, FloatingTargetPosition, FloatingTargetPositionConfig } from '../types';
import { getPlacementFunction, getOffsetFunction } from './middleware';
import { waitFor } from './utils';

export const getPositionFunction = async (
  config: FloatingTargetPositionConfig,
): Promise<FloatingPositionFunction> => {

  const placementFn = getPlacementFunction(config);
  const offsetFn = getOffsetFunction(config);

  return async (
    trigger: HTMLElement,
    target: HTMLElement,
  ): Promise<FloatingTargetPosition> => {
    const triggerRect = trigger.getBoundingClientRect();
    const targetRect = await waitFor<DOMRect>(() => target.getBoundingClientRect());
    let pos = placementFn(triggerRect, targetRect);
    const { x, y } = offsetFn(pos);
    return new Promise<FloatingTargetPosition>(resolve => resolve({ x, y }));
  };
};
