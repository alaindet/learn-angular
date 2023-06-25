import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { CreateMatchDto, Match } from '../types';

export const matchesFetchActions = createActionGroup({
  source: 'Matches',
  events: {
    fetchMatches: emptyProps(),
    fetchMatchesCached: emptyProps(),
    forceFetchMatches: emptyProps(),
    fetchMatchesSuccess: props<{ matches: Match[] }>(),
    fetchMatchesError: props<{ message: string }>(),
  },
});

export const matchCreateActions = createActionGroup({
  source: 'Matches',
  events: {
    createMatch: props<{ dto: CreateMatchDto }>(),
    createMatchSuccess: props<{ match: Match }>(),
    createMatchError: props<{ message: string }>(),
  },
});

export const matchDeleteActions = createActionGroup({
  source: 'Matches',
  events: {
    deleteMatch: props<{ match: Match }>(),
    deleteMatchSuccess: props<{ match: Match }>(),
    deleteMatchError: props<{ message: string }>(),
  },
});
