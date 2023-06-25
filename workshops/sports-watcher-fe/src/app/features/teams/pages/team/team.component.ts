import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectTeam, selectTeamsIsLoaded, teamsDeleteActions, teamsFetchActions } from '../../store';
import { selectUserIsAdmin } from '@app/features/user/store';

const imports = [
  NgIf,
  NgFor,
  RouterLink,
];

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports,
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamPageComponent implements OnInit {

  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private teamId = this.route.snapshot.params['id'];
  loaded = this.store.selectSignal(selectTeamsIsLoaded);
  team = this.store.selectSignal(selectTeam(this.teamId));
  isAdmin = this.store.selectSignal(selectUserIsAdmin);
  // teamGames = this.store.selectSignal();

  ngOnInit() {
    this.store.dispatch(teamsFetchActions.fetchTeams());
  }

  onRemoveTeam() {
    const team = this.team();
    this.store.dispatch(teamsDeleteActions.deleteTeam({ team }));
    this.store.dispatch(teamsFetchActions.forceFetchTeams());
    // TODO: Force download of matches too
    // TODO: Show notification
    this.router.navigate(['/teams']);
  }
}
