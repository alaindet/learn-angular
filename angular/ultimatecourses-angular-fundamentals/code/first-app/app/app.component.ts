import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  public myInput: string;

  public onClick(event: any): void {
    console.log('onClick()...');
  }

}
