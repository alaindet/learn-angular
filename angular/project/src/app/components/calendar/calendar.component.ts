import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

import { CalendarDay, MonthDiff } from './calendar.model';
import { ISO_WEEKDAY, MONTHS } from './calendar.const';

// Day.js
// TODO: Move into another file
import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/it';
dayjs.extend(relativeTime);
dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Rome');
dayjs.locale('it');

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, OnChanges {

  @Input() date: number;

  @Output() clickedDate = new EventEmitter<Date>();

  dateInstance: Dayjs;
  days: CalendarDay[] = [];
  weekDayAbbrevs: string[];
  monthDisplay: string;
  MonthDiff = MonthDiff;

  ngOnChanges(): void {
    if (this.date) {
      this.dateInstance = dayjs(this.date);
      this.buildCalendar(dayjs(this.dateInstance));
    }
  }

  ngOnInit(): void {

    // Only triggers when there's no "date" input and ngOnChanges is skipped!
    if (!this.date) {
      this.dateInstance = dayjs();
      this.buildCalendar(this.dateInstance);
    }

    this.weekDayAbbrevs = this.buildWeekDayAbbrevs(ISO_WEEKDAY);
  }

  onNextMonth(): void {
    this.dateInstance = this.dateInstance.startOf('month').add(1, 'month');
    this.buildCalendar(this.dateInstance);
  }

  onPrevMonth(): void {
    this.dateInstance = this.dateInstance.startOf('month').subtract(1, 'month');
    this.buildCalendar(this.dateInstance);
  }

  onDayClick(day: CalendarDay): void {
    if (day.monthDiff !== MonthDiff.Current) {
      return;
    }
    const timestamp = this.dateInstance.set('date', day.day).valueOf();
    const clickedDate: Date = new Date(timestamp);
    this.clickedDate.emit(clickedDate);
  }

  private buildCalendar(date: Dayjs): void {
    this.monthDisplay = this.buildMonthDisplay(date);
    this.days = this.buildCalendarDays(date);
  }

  private buildWeekDayAbbrevs(abbrevs: { [index: number]: string }): string[] {
    return Object.values(abbrevs).map(
      (abbrev: string): string => abbrev.slice(0, 3)
    );
  }

  private buildCalendarDays(date: Dayjs): CalendarDay[] {

    let days = [];

    // Get days from previous month?
    const firstDayOfMonth = date.startOf('month');
    let leadingDay = firstDayOfMonth;
    while (ISO_WEEKDAY[leadingDay.isoWeekday()] !== ISO_WEEKDAY[1]) {
      leadingDay = leadingDay.subtract(1, 'day');
      const day = {
        day: leadingDay.date(),
        weekDay: ISO_WEEKDAY[leadingDay.isoWeekday()].toLowerCase(),
        monthDiff: MonthDiff.Previous,
        isActive: false,
      };
      days = [day, ...days];
    }

    // Build current month's days
    const firstWeekDayOfMonth = firstDayOfMonth.isoWeekday();
    const daysInMonth = date.daysInMonth();
    for (let day = 1; day <= daysInMonth; day++) {
      let weekDayIndex = (day - firstWeekDayOfMonth) % 7;
      if (weekDayIndex <= 0) {
        weekDayIndex += 7;
      }
      days.push({
        day: day,
        weekDay: ISO_WEEKDAY[weekDayIndex].toLowerCase(),
        monthDiff: MonthDiff.Current,
        isActive: day === this.dateInstance.date(),
      });
    }

    // Get days from next month?
    const lastDayOfMonth = date.endOf('month');
    let trailingDay = lastDayOfMonth;
    while (ISO_WEEKDAY[trailingDay.isoWeekday()] !== ISO_WEEKDAY[7]) {
      trailingDay = trailingDay.add(1, 'day');
      const day = {
        day: trailingDay.date(),
        weekDay: ISO_WEEKDAY[trailingDay.isoWeekday()].toLowerCase(),
        monthDiff: MonthDiff.Next,
        isActive: false,
      };
      days = [...days, day];
    }

    return days;
  }

  private buildMonthDisplay(date: Dayjs): string {
    const month = MONTHS[date.month()];
    const year = date.year();
    return `${month} ${year}`;
  }
}
