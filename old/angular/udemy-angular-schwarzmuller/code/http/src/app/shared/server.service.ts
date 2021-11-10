import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Server } from './server.model';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class ServerService {

  public baseUrl = 'https://alaindet-udemy-angular.firebaseio.com';
  public serversUrl = '';
  public appNameUrl = '';

  constructor (
    private http: Http
  ) {
    this.serversUrl = this.baseUrl + '/servers-data.json';
    this.appNameUrl = this.baseUrl + '/appName.json';
  }

  storeServers(servers: Server[]) {
    return this.http.put(this.serversUrl, servers);
  }

  getServers() {
    return this.http.get(this.serversUrl).pipe(
      catchError(
        (error: Response) => {
          return throwError('Firebase did not respond correctly.');
        }
      ),
      map(
        (response: Response) => response.json()
      )
    );
  }

  getAppName() {
    return this.http.get(this.appNameUrl)
      .pipe(
        map((response: Response) => response.json())
      );
  }

}
