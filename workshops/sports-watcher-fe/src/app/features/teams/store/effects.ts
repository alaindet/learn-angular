import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';

import { createUiController } from '@app/core/store/ui';
import { TeamsService } from '../services';
import { teamsCreateActions, teamsDeleteActions, teamsFetchActions } from './actions';
import { selectTeamsShouldFetch } from './selectors';

@Injectable()
export class TeamsEffects {

  private actions = inject(Actions);
  private store = inject(Store);
  private teamsService = inject(TeamsService);
  private ui = createUiController(this.actions);

  fetchItems$ = createEffect(() => this.actions.pipe(
    ofType(teamsFetchActions.fetchTeams),
    withLatestFrom(this.store.select(selectTeamsShouldFetch)),
    switchMap(([_, shouldFetch]) => {

      if (!shouldFetch) {
        return of(teamsFetchActions.fetchTeamsCached());
      }

      return this.teamsService.getAllTeams().pipe(
        map(teams => teamsFetchActions.fetchTeamsSuccess({ teams })),
        catchError(({ message }) => of(teamsFetchActions.fetchTeamsError({ message }))),
      );
    }),
  ));

  forceFetchItems$ = createEffect(() => this.actions.pipe(
    ofType(teamsFetchActions.forceFetchTeams),
    switchMap(() => this.teamsService.getAllTeams().pipe(
      map(teams => teamsFetchActions.fetchTeamsSuccess({ teams })),
      catchError(({ message }) => of(teamsFetchActions.fetchTeamsError({ message }))),
    )),
  ));

  createItem$ = createEffect(() => this.actions.pipe(
    ofType(teamsCreateActions.createTeam),
    switchMap(({ team }) => this.teamsService.createTeam(team).pipe(
      map(team => teamsCreateActions.createTeamSuccess({ team })),
      catchError(({ message }) => of(teamsCreateActions.createTeamError({ message }))),
    )),
  ));

  deleteItem$ = createEffect(() => this.actions.pipe(
    ofType(teamsDeleteActions.deleteTeam),
    switchMap(({ team }) => this.teamsService.deleteTeam(team.id).pipe(
      map(() => teamsDeleteActions.deleteTeamSuccess({ team })),
      catchError(({ message }) => of(teamsDeleteActions.deleteTeamError({ message }))),
    )),
  ));

  startLoader$ = this.ui.startLoaderOn(
    teamsFetchActions.fetchTeams,
    teamsFetchActions.forceFetchTeams,
    teamsCreateActions.createTeam,
    teamsDeleteActions.deleteTeam,
  );

  stopLoader$ = this.ui.stopLoaderOn(
    teamsFetchActions.fetchTeamsSuccess,
    teamsFetchActions.fetchTeamsCached,
    teamsFetchActions.fetchTeamsError,
    teamsCreateActions.createTeamSuccess,
    teamsCreateActions.createTeamError,
    teamsDeleteActions.deleteTeamSuccess,
    teamsDeleteActions.deleteTeamError,
  );

  showSuccess$ = this.ui.showSuccessOn(
    teamsFetchActions.fetchTeamsSuccess,
    teamsCreateActions.createTeamSuccess,
    teamsDeleteActions.deleteTeamSuccess,
  );

  showError$ = this.ui.showErrorOn(
    teamsFetchActions.fetchTeamsError,
    teamsCreateActions.createTeamError,
    teamsDeleteActions.deleteTeamError,
  );
}

export const TEAMS_FEATURE_EFFECTS = [
  TeamsEffects,
];
