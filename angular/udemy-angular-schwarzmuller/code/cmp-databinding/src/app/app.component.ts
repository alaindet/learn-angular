import { ServerElement } from './shared/models/server-element.model';
import { Component } from '@angular/core';
import { InputServerElement } from './shared/models/input-server-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lightbulbStatus = true;
  lightbulbRemoved = false;

  serverElements: ServerElement[] = [
    {type: 'server', name: 'TestServer', content: 'Just a test server'}
  ];

  onLightbulbToggled(): void {
    this.lightbulbStatus = !this.lightbulbStatus;
  }

  onLightbulbDestroyed(): void {
    this.lightbulbRemoved = true;
  }

  onServerAdded(input: InputServerElement) {
    this.serverElements.push({
      type: 'server',
      name: input.name,
      content: input.content
    });
  }

  onBlueprintAdded(input: InputServerElement) {
    this.serverElements.push({
      type: 'blueprint',
      name: input.name,
      content: input.content
    });
  }

}
