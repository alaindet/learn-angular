export const FOCUS_HANDLE = 'FOCUS_HANDLE';
export const FOCUS_DISMISS = 'FOCUS_DISMISS';
export const FOCUS_CONFIRM = 'FOCUS_CONFIRM';

export type A11yMenuFocusable = (
  | 'FOCUS_HANDLE'
  | 'FOCUS_DISMISS'
  | 'FOCUS_CONFIRM'
  | string // Any identifier
  | null
);
