import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@mycomp/ui-sdk/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'showcase';
}
