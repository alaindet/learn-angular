export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export const PAGE_STATUS = {
  PRISTINE: 'pristine',
  LOADING: 'loading',
  IDLE: 'idle',
} as const;

// Enum-like
export type PageStatus = typeof PAGE_STATUS[keyof typeof PAGE_STATUS];
