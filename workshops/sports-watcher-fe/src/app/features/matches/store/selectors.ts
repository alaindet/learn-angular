import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LoadingStatus } from '@app/common/types';
import { CACHE_MAX_AGE } from '@app/core/constants';
import { Team, TeamWithMatches } from '@app/features/teams';
import { selectTeamsMap } from '@app/features/teams/store/selectors';
import { MATCHES_FEATURE_NAME, MatchesFeatureState } from './state';
import { MatchesReport } from '../types';

const selectMatchesFeature = createFeatureSelector<MatchesFeatureState>(
  MATCHES_FEATURE_NAME,
);

export const selectMatchesStatus = createSelector(
  selectMatchesFeature,
  state => state.status,
);

export const selectMatchesIsLoading = createSelector(
  selectMatchesFeature,
  state => state.status === LoadingStatus.Loading,
);

export const selectMatchesIsLoaded = createSelector(
  selectMatchesFeature,
  state => state.status === LoadingStatus.Idle,
);

export const selectMatchesInErrorStatus = createSelector(
  selectMatchesFeature,
  state => state.status === LoadingStatus.Error,
);

export const selectMatchesShouldFetch = createSelector(
  selectMatchesFeature,
  state => {

    if (state.status === LoadingStatus.Pristine) {
      return true;
    }

    if (state.lastUpdated === null) {
      return true;
    }

    if (Date.now() - state.lastUpdated > CACHE_MAX_AGE) {
      return true;
    }

    if (!state.matches) {
      return true;
    }

    if (!state.matches.length) {
      return true;
    }

    return false;
  },
);

export const selectMatches = createSelector(
  selectMatchesFeature,
  state => state.matches,
);

export const selectMatchesGroupedByTeam = createSelector(
  selectMatches,
  selectTeamsMap,
  (matches, teamsMap) => {
    if (matches === null || teamsMap === null) {
      return null;
    }

    const matchesMap: { [teamId: Team['id']]: TeamWithMatches } = {};

    for (const match of matches) {

      if (!matchesMap[match.home]) {
        const team = teamsMap[match.home];
        matchesMap[match.home] = { team, matches: [] };
      }

      matchesMap[match.home].matches.push(match);

      if (!matchesMap[match.away]) {
        const team = teamsMap[match.away];
        matchesMap[match.away] = { team, matches: [] };
      }

      matchesMap[match.away].matches.push(match);
    }

    return Object.values(matchesMap);
  },
);

export const selectMatchesReportByTeam = (teamId: string) => createSelector(
  selectMatchesGroupedByTeam,
  (groupedMatches): MatchesReport => {

    let wins = 0;
    let draws = 0;
    let losses = 0;

    if (groupedMatches === null) {
      return createEmptyMatchesReport();
    }

    const grouped = groupedMatches.find(g => g.team.id === teamId);

    if (!grouped) {
      return createEmptyMatchesReport();
    }

    grouped.matches.forEach(match => {
      switch (match.winner) {
        case teamId:
          wins++;
          break;
        case null:
          draws++;
          break;
        default:
          losses++;
          break;
      }
    });

    const total = wins + draws + losses;
    const winsPercentage = Number((100 * (wins / total)).toFixed(2));
    const drawsPercentage = Number((100 * (draws / total)).toFixed(2));
    const lossesPercentage = Number((100 * (losses / total)).toFixed(2));

    return {
      wins,
      winsPercentage,
      draws,
      drawsPercentage,
      losses,
      lossesPercentage,
      total,
    };
  },
);

// Helper
function createEmptyMatchesReport(): MatchesReport {
  return {
    wins: 0,
    winsPercentage: 0,
    draws: 0,
    drawsPercentage: 0,
    losses: 0,
    lossesPercentage: 0,
    total: 0,
  };
}