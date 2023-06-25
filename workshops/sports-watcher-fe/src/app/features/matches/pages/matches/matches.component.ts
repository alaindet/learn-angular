import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';

import { selectUserIsAdmin } from '@app/features/user/store';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { uiSetPageTitle } from '@app/core/store/ui';
import { matchCreateActions, matchesFetchActions, selectMatches, selectMatchesIsLoaded } from '../../store';
import { selectTeams } from '@app/features/teams/store';

const imports = [
  NgIf,
  NgFor,
  RouterLink,
  ReactiveFormsModule,
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
  homeTeamOptions = this.store.selectSignal(selectTeams); // TODO
  awayTeamOptions = this.store.selectSignal(selectTeams); // TODO
  winnerTeamOptions = this.store.selectSignal(selectTeams); // TODO

  matchForm!: FormGroup;

  ngOnInit() {
    this.store.dispatch(matchesFetchActions.fetchMatches());
    this.store.dispatch(uiSetPageTitle({ title: 'Matches - Sports Watcher' }));
    this.initForm();
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
