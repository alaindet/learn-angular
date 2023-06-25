import { Team } from '../teams';

export type Match = {
  id: string;
  home: Team['id'];
  away: Team['id'];
  winner: Team['id'];
};

export type CreateMatchDto = Omit<Match, 'id'>;
