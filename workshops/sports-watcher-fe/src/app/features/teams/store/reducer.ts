import { createReducer, on } from '@ngrx/store';

import { TEAMS_FEATURE_INITIAL_STATE } from './state';
import { teamsFetchActions } from './actions';
import { LoadingStatus } from '@app/common/types';

export const teamsReducer = createReducer(TEAMS_FEATURE_INITIAL_STATE,

  on(
    teamsFetchActions.fetchTeams,
    teamsFetchActions.forceFetchTeams,
    state => {
      const loading = LoadingStatus.Loading;
      return { ...state, loading };
    },
  ),

  on(teamsFetchActions.fetchTeamsCached, state => {
    const loading = LoadingStatus.Idle;
    return { ...state, loading };
  }),

  on(teamsFetchActions.fetchTeamsSuccess, (state, { teams }) => {
    const loading = LoadingStatus.Idle;
    const lastUpdated = Date.now();
    return { ...state, loading, teams, lastUpdated };
  }),

  on(teamsFetchActions.fetchTeamsError, (state, message) => {
    const loading = LoadingStatus.Error;
    return { ...state, loading };
  }),
);
