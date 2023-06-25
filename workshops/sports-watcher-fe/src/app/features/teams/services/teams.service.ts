import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { DataResponse } from '@app/common/types';
import { environment } from '@app/environment';
import { Team } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {

  private http = inject(HttpClient);

  getAllTeams(): Observable<Team[]> {
    const url = `${environment.apiUrl}/teams`;
    return this.http.get<DataResponse<Team[]>>(url).pipe(map(r => r.data));
  }

  createTeam(team: Team): Observable<Team> {
    const url = `${environment.apiUrl}/teams`;
    return this.http.post<DataResponse<Team>>(url, team).pipe(map(r => r.data));
  }

  deleteTeam(teamId: Team['id']): Observable<string> {
    const url = `${environment.apiUrl}/teams/${teamId}`;
    return this.http.delete<{ message: string }>(url).pipe(map(r => r.message));
  }
}
