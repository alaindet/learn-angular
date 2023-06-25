import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { DataResponse } from '@app/common/types';
import { environment } from '@app/environment';
import { CreateMatchDto, Match } from '../types';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {

  private http = inject(HttpClient);

  getAllMatches(): Observable<Match[]> {
    const url = `${environment.apiUrl}/matches`;
    return this.http.get<DataResponse<Match[]>>(url).pipe(map(r => r.data));
  }

  createMatch(dto: CreateMatchDto): Observable<Match> {
    const url = `${environment.apiUrl}/matches`;
    return this.http.post<DataResponse<Match>>(url, dto).pipe(map(r => r.data));
  }

  deleteMatch(matchId: Match['id']): Observable<string> {
    const url = `${environment.apiUrl}/matches/${matchId}`;
    return this.http.delete<{ message: string }>(url).pipe(map(r => r.message));
  }
}
