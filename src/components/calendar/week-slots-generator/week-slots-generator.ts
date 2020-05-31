import { CalendarDay } from '../day.type';

function generateWeekSlots(dateReference: Date): Array<CalendarDay> {
  const firstDayOfTheWeek = getStartOfTheWeek(dateReference);
  const nextDayOfTheWeekCreator = getNextDayOfTheWeekCreator(firstDayOfTheWeek);

  return Array
    .from(Array(7).keys())
    .map(nextDayOfTheWeekCreator);
}

function getStartOfTheWeek(dateReference: Date): Date {
  const dateReferenceWeekDay = dateReference.getDay();
  const startOfTheWeek = new Date(dateReference);

  startOfTheWeek.setDate(dateReference.getDate() - dateReferenceWeekDay);
  return startOfTheWeek;
}

function getNextDayOfTheWeekCreator(firstDayOfTheWeek: Date) {
  return function createNextDayOfTheWeekDate(indexOfDayOfTheWeek: number): CalendarDay {
    const nextDayOfTheWeek = new Date(firstDayOfTheWeek);
    nextDayOfTheWeek.setDate(firstDayOfTheWeek.getDate() + indexOfDayOfTheWeek);

    return {
      day: nextDayOfTheWeek
    };
  }
}

export default {
  generateWeekSlots
}