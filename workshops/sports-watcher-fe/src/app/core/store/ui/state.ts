import { Notification } from '@app/common/types';

export type UiFeatureState = {
  notifications: Notification[];
  notificationTimeout: number;
  loading: boolean;
  title: string;
  // TODO: Theme
  // TODO: Navigation
};

export const UI_FEATURE_NAME = 'ui';

export const UI_FEATURE_INITIAL_STATE: UiFeatureState = {
  notifications: [],
  notificationTimeout: 3000,
  loading: false,
  title: 'Sports Watcher App',
};
