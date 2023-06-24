import { createFeatureSelector, createSelector } from '@ngrx/store';

import { USER_FEATURE_NAME, UserFeatureState } from './state';
import { LoadingStatus } from '@app/common/types';

const selectUserFeature = createFeatureSelector<UserFeatureState>(
  USER_FEATURE_NAME,
);

export const selectUser = createSelector(
  selectUserFeature,
  state => {
    const { email, role } = state;
    if (!email || !role) return null;
    return { email, role };
  },
);

export const selectUserRole = createSelector(
  selectUserFeature,
  state => state.role ?? null,
);
