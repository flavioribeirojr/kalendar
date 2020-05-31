import { CalendarDay } from './day.type';

export function createDayOfMonthGenerator(activeMonthDate: Date) {
  return function createDay(date: Date): CalendarDay {
    return {
      day: date,
      dayIsOnSameMonth: date.getMonth() === activeMonthDate.getMonth()
    };
  }
}