import { CalendarDay } from '../day.type';

type DayCreator = (date: Date) => CalendarDay;

function createWeekGenerator(dayCreator: DayCreator) {
  function generateWeekSlots(dateReference: Date): Array<CalendarDay> {
    const firstDayOfTheWeek = getStartOfTheWeek(dateReference);

    return Array
      .from(Array(7).keys())
      .map(createNextDayOfTheWeekDate);

    function getStartOfTheWeek(dateReference: Date): Date {
      const dateReferenceWeekDay = dateReference.getDay();
      const startOfTheWeek = new Date(dateReference);
    
      startOfTheWeek.setDate(dateReference.getDate() - dateReferenceWeekDay);
      return startOfTheWeek;
    }
  
    function createNextDayOfTheWeekDate(indexOfDayOfTheWeek: number): CalendarDay {
      const nextDayOfTheWeek = new Date(firstDayOfTheWeek);
      nextDayOfTheWeek.setDate(firstDayOfTheWeek.getDate() + indexOfDayOfTheWeek);
  
      return dayCreator(nextDayOfTheWeek);
    }
  }

  return {
    generateWeekSlots
  };
}

export default createWeekGenerator;