import { AsyncPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { selectUserIsAdmin } from '@app/features/user/store';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { uiSetPageTitle } from '@app/core/store/ui';
import { selectTeams, selectTeamsMap } from '@app/features/teams/store';
import { matchCreateActions, matchesFetchActions, selectMatches, selectMatchesGroupedByTeam, selectMatchesIsLoaded } from '../../store';
import { ResultBadgePipe } from './result-badge.pipe';
import { WINNER_TEAM_OPTIONS, WinnerTeam } from './winner-team-options';

const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
  NgTemplateOutlet,
  RouterLink,
  ReactiveFormsModule,
  NgClass,
  ResultBadgePipe,
];

@Component({
  selector: 'app-teams-page',
  standalone: true,
  imports,
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesPageComponent implements OnInit {

  private store = inject(Store);
  private formBuilder = inject(FormBuilder);

  loaded = this.store.selectSignal(selectMatchesIsLoaded);
  matches = this.store.selectSignal(selectMatches);
  isAdmin = this.store.selectSignal(selectUserIsAdmin);
  matchesGroupedByTeam = this.store.selectSignal(selectMatchesGroupedByTeam);
  homeTeamOptions = this.store.selectSignal(selectTeams); // TODO: Filter
  awayTeamOptions = this.store.selectSignal(selectTeams); // TODO: Filter
  winnerTeamOptions = WINNER_TEAM_OPTIONS;
  teamsMap = this.store.selectSignal(selectTeamsMap);
  openAccordion = signal<string | null>(null);

  matchForm!: FormGroup;
  matchFormSameTeamError!: Observable<boolean>;

  ngOnInit() {
    this.store.dispatch(matchesFetchActions.fetchMatches());
    this.store.dispatch(uiSetPageTitle({ title: 'Matches - Sports Watcher' }));
    this.initForm();
  }

  onToggleOpenAccordion(teamId: string) {
    this.openAccordion() === teamId
      ? this.openAccordion.set(null)
      : this.openAccordion.set(teamId);
  }

  onCreateMatch() {

    if (this.matchForm.invalid) {
      return;
    }

    let { home, away, winner } = this.matchForm.value;

    switch (winner) {
      case WinnerTeam.Home:
        winner = home;
        break;
      case WinnerTeam.Away:
        winner = away;
        break;
      case WinnerTeam.Draw:
        winner = null;
        break;
    }

    const dto = { home, away, winner };
    this.store.dispatch(matchCreateActions.createMatch({ dto }));
    this.store.dispatch(matchesFetchActions.forceFetchMatches());
  }

  private initForm(): void {
    this.matchForm = this.formBuilder.group({
      home: ['', [Validators.required]],
      away: ['', [Validators.required]],
      winner: ['', [Validators.required]],
    });

    this.matchFormSameTeamError = this.matchForm.valueChanges
      .pipe(map(values => values.home === values.away));
  }
}