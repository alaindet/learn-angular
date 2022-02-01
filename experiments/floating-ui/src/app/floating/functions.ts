const FPS = 1000 / 60;

export interface CalculatePositionConfig {
  // TODO: ...
}

export const waitFor = async (callback: Function, delay = 0) => {
  return new Promise(resolve => setTimeout(() => resolve(callback()), delay));
};

// TODO
export const calculatePosition = async (
  config: CalculatePositionConfig,
): Promise<
  (triggerEl: HTMLElement, targetEl: HTMLElement) => Promise<{
    x: number;
    y: number;
  }>
> => {

  // TODO: Extract "positioner" function and use it in the closure

  return async (
    triggerEl: HTMLElement,
    targetEl: HTMLElement,
  ): Promise<{ x: number; y: number; }> => {
    const triggerRect = triggerEl.getBoundingClientRect();
    const targetRect = await waitFor(() => targetEl.getBoundingClientRect(), FPS);

    // TODO ...

    return new Promise(resolve => {
      resolve({x: 0, y: 0});
    });
  };
};
