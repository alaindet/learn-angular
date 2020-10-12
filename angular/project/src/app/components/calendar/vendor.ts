import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/it';

export const configureDayJs = (): void => {
  dayjs.extend(relativeTime);
  dayjs.extend(weekday);
  dayjs.extend(isoWeek);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('Europe/Rome');
  dayjs.locale('it');
};
