import { Component } from '@angular/core';

@Component({
  selector: 'test-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class TestCalendarComponent {

  date: number = (new Date()).valueOf();
}
