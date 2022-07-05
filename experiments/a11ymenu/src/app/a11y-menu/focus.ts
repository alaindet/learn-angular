export const FOCUSED_HANDLE = 'handle';

export type FocusedHandle = 'handle';

export type FocusedItem = (
  | FocusedHandle // Focus the menu handle
  | string // Focus any menu item id
  | null // Nothing is focused
);
