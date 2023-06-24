import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

import { Notification } from '@app/common/types';

export const uiNotificationsActions = createActionGroup({
  source: 'UI/Notifications',
  events: {
    addSuccess: props<{ message: Notification['message'] }>(),
    addError: props<{ message: Notification['message'] }>(),
    dismiss: emptyProps(),
  },
});

export const uiLoaderActions = createActionGroup({
  source: 'UI/Loader',
  events: {
    start: emptyProps(),
    stop: emptyProps(),
  },
});

export const uiSetPageTitle = createAction(
  '[UI] Set page title',
  props<{ title: string }>(),
);
