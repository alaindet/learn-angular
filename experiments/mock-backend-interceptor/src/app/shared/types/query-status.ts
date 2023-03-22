export const QUERY_STATUS = {
  PRISTINE: 'pristine',
  SUCCESS: 'success',
  ERROR: 'error',
  LOADING: 'loading',
  IDLE: 'idle',
} as const;

// Enum-like
export type QueryStatus = typeof QUERY_STATUS[keyof typeof QUERY_STATUS];
