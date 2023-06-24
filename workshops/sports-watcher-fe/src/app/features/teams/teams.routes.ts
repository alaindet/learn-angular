import { Routes } from '@angular/router';

import { TeamsPageComponent } from './teams.component';

export const TEAMS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TeamsPageComponent,
    // providers: [
    //   provideState(TEAMS_FEATURE_NAME, teamsReducer),
    //   provideEffects(...TEAMS_FEATURE_EFFECTS),
    // ],
  },
];
