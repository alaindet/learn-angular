import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';

import { configureDayJs } from './vendor';
import { CalendarDay, MonthDiff } from './calendar.model';
import { ISO_WEEKDAY, MONTHS } from './calendar.const';

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
  weekDayIndex = 1;

  constructor(
    private cd: ChangeDetectorRef,
  ) {
    configureDayJs();
  }

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
    this.setWeekday(firstWeekDayOfMonth);
    for (let day = 1; day <= daysInMonth; day++) {
      const weekDayIndex = (day === 1) ? firstWeekDayOfMonth : this.bumpWeekDay();

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

  private setWeekday(value: number): void {
    this.weekDayIndex = value;
  }

  // Cycles through week days
  private bumpWeekDay(): number {
    this.weekDayIndex++;
    if (this.weekDayIndex > 7) {
      this.weekDayIndex = 1;
    }
    return this.weekDayIndex;
  }

  private buildMonthDisplay(date: Dayjs): string {
    const month = MONTHS[date.month()];
    const year = date.year();
    return `${month} ${year}`;
  }
}
