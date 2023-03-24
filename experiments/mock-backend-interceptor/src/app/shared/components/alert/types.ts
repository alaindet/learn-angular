export const ALERT_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

// Enum-like
export type AlertType = typeof ALERT_TYPE[keyof typeof ALERT_TYPE];

export type Alert = {
  type: AlertType;
  message: string;
};
