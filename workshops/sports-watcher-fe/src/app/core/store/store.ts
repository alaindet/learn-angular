import { USER_FEATURE_NAME, UserFeatureState, userReducer, USER_FEATURE_EFFECTS } from '@app/features/user/store';
import { UI_FEATURE_NAME, UiFeatureState, uiReducer, UI_FEATURE_EFFECTS } from './ui';

export type RootState = {
  [USER_FEATURE_NAME]: UserFeatureState,
  [UI_FEATURE_NAME]: UiFeatureState,
  // ...
};

export const rootReducer = {
  [USER_FEATURE_NAME]: userReducer,
  [UI_FEATURE_NAME]: uiReducer,
  // ...
};

export const rootEffects = [
  ...USER_FEATURE_EFFECTS,
  ...UI_FEATURE_EFFECTS,
  // ...
];
