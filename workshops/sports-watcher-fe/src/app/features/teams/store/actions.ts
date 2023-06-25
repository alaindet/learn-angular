import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Team } from '../types';

export const teamsFetchActions = createActionGroup({
  source: 'Teams',
  events: {
    fetchTeams: emptyProps(),
    fetchTeamsCached: emptyProps(),
    forceFetchTeams: emptyProps(),
    fetchTeamsSuccess: props<{ teams: Team[] }>(),
    fetchTeamsError: props<{ message: string }>(),
  },
});

export const teamCreateActions = createActionGroup({
  source: 'Teams',
  events: {
    createTeam: props<{ team: Team }>(),
    createTeamSuccess: props<{ team: Team }>(),
    createTeamError: props<{ message: string }>(),
  },
});

export const teamDeleteActions = createActionGroup({
  source: 'Teams',
  events: {
    deleteTeam: props<{ team: Team }>(),
    deleteTeamSuccess: props<{ team: Team }>(),
    deleteTeamError: props<{ message: string }>(),
  },
});
