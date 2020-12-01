import { ServerService } from './shared/server.service';
import { Server } from './shared/server.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appName: Observable<string>;
  servers: Server[] = [];

  constructor(
    private serverService: ServerService
  ) {}

  ngOnInit(): void {
    this.appName = this.serverService.getAppName();
  }

  onAddServer(name: string): void {
    this.servers.push({
      name: name,
      capacity: 50,
      id: Math.random() * 100
    });
  }

  onStoreServers(): void {
    this.serverService.storeServers(this.servers)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  onReadServers(): void {
    this.serverService.getServers()
      .subscribe(
        (servers: Server[]) => {
          this.servers = servers;
        },
        error => {
          console.log('ERROR', error);
        }
      );
  }

}
