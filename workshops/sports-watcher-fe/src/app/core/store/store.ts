import { UI_FEATURE_NAME, UiFeatureState, uiReducer, UI_FEATURE_EFFECTS } from './ui';
import { USER_FEATURE_NAME, UserFeatureState, userReducer, USER_FEATURE_EFFECTS } from '@app/features/user/store';
import { TEAMS_FEATURE_NAME, TeamsFeatureState, teamsReducer, TEAMS_FEATURE_EFFECTS } from '@app/features/teams/store';

export type RootState = {
  [USER_FEATURE_NAME]: UserFeatureState,
  [UI_FEATURE_NAME]: UiFeatureState,
  [TEAMS_FEATURE_NAME]: TeamsFeatureState,
  // ...
};

export const rootReducer = {
  [USER_FEATURE_NAME]: userReducer,
  [UI_FEATURE_NAME]: uiReducer,
  [TEAMS_FEATURE_NAME]: teamsReducer,
  // ...
};

export const rootEffects = [
  ...USER_FEATURE_EFFECTS,
  ...UI_FEATURE_EFFECTS,
  ...TEAMS_FEATURE_EFFECTS,
  // ...
];
