export enum MonthDiff {
  Previous = -1,
  Current = 0,
  Next = 1,
}

export enum WeekDay {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday',
}

export interface CalendarDay {
  day: number;
  weekDay: WeekDay;
  monthDiff: MonthDiff;
}
