import MonthSlotGenerator from './month-slots-generator';
import { CalendarDay } from '../types';

const mockedWeekGenerator = (date: Date): Array<CalendarDay> =>
  Array(7).fill({ day: new Date() });

describe('MonthSlotGenerator', function () {
  test('it must return 6 rows of weeks', function () {
    const monthSlots = MonthSlotGenerator.generateForDate(new Date(), mockedWeekGenerator);

    expect(monthSlots.length / 7).toBe(6);
  });

  test('the given date must be present on the month dates', function () {
    const currentDate = new Date();
    const monthSlots = MonthSlotGenerator.generateForDate(currentDate, mockedWeekGenerator);

    expect(monthSlots).toEqual(expect.arrayContaining([{ day: currentDate }]));
  });
});