import { LoadingStatus } from '@app/common/types';
import { Team } from '../types';

export type TeamsFeatureState = {
  teams: Team[];
  status: LoadingStatus;
  lastUpdated: number | null;
};

export const TEAMS_FEATURE_NAME = 'teams';

export const TEAMS_FEATURE_INITIAL_STATE: TeamsFeatureState = {
  teams: [],
  status: LoadingStatus.Pristine,
  lastUpdated: null,
};
