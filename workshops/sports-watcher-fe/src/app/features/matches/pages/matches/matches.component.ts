import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';

import { selectUserIsAdmin } from '@app/features/user/store';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { uiSetPageTitle } from '@app/core/store/ui';
import { matchCreateActions, matchesFetchActions, selectMatches, selectMatchesGroupedByTeam, selectMatchesIsLoaded } from '../../store';
import { selectTeams, selectTeamsMap } from '@app/features/teams/store';

const imports = [
  NgIf,
  NgFor,
  RouterLink,
  ReactiveFormsModule,
  NgClass,
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
  winnerTeamOptions = this.store.selectSignal(selectTeams); // TODO: Filter
  teamsMap = this.store.selectSignal(selectTeamsMap);
  openAccordion = signal<string | null>(null);

  matchForm!: FormGroup;

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

    const { home, away, winner } = this.matchForm.value;
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
  }
}
