import { CalendarDay } from '../day.type';

const NUMBER_OF_WEEKS = 6;
const NUMBER_OF_DAYS_IN_WEEK = 7;

type WeekGenerator = (date: Date) => Array<CalendarDay>;

function generateForDate(dateReference: Date, weekGenerator: WeekGenerator): Array<CalendarDay> {
  const dateOfMonthCreator = getMonthDatesCreator(dateReference);

  return Array
    .from(Array(NUMBER_OF_WEEKS).keys())
    .map(dateOfMonthCreator)
    .map(weekGenerator)
    .reduce(flattenWeekDays, []);
}

function getMonthDatesCreator(dateReference: Date) {
  const firstDayOfTheMonth = getFirstDateOfMonth(dateReference);

  return function createDayOfMonth(dateOfMonthIndex: number): Date {
    const nextDayWeek = new Date();
    nextDayWeek.setDate(firstDayOfTheMonth.getDate() + (NUMBER_OF_DAYS_IN_WEEK * dateOfMonthIndex));

    return nextDayWeek;
  }
}

function getFirstDateOfMonth(dateReference: Date) {
  const firstDayOfTheMonth = new Date(dateReference);
  firstDayOfTheMonth.setDate(1);

  return firstDayOfTheMonth;
}

function flattenWeekDays(weekDays: Array<CalendarDay>, weekDayCollection: Array<CalendarDay>) {
  return [
    ...weekDays,
    ...weekDayCollection
  ];
}

export default {
  generateForDate
}