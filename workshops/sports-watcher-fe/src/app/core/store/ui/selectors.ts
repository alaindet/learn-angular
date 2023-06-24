import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RuntimeNotification } from '@app/common/types';
import { UI_FEATURE_NAME, UiFeatureState } from './state';

const selectUiFeature = createFeatureSelector<UiFeatureState>(UI_FEATURE_NAME);

export const selectUiNotification = createSelector(
  selectUiFeature,
  (state): RuntimeNotification | null => {
    if (!state.notifications.length) {
      return null;
    }
    const notifications = state.notifications;
    const more = notifications.length - 1;
    return { ...notifications[notifications.length - 1], more };
  },
);

export const selectUiNotificationsExist = createSelector(
  selectUiFeature,
  state => state.notifications.length > 0,
);

export const selectUiNotificationTimeout = createSelector(
  selectUiFeature,
  state => state.notificationTimeout,
);

export const selectUiIsLoading = createSelector(
  selectUiFeature,
  state => state.loading,
);

export const selectUiTitle = createSelector(
  selectUiFeature,
  state => state.title,
);
