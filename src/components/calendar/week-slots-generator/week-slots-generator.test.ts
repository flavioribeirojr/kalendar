import WeekSlotGenerator from './week-slots-generator';
import { CalendarDay } from '../day.type';

describe('WeekSlotsGenerator', function () {
  test('it must return an array with seven days', function () {
    const week = WeekSlotGenerator.generateWeekSlots(new Date());

    expect(week.length).toBe(7);
  });

  test('the dates returned must be incremental', function () {
    const week = WeekSlotGenerator.generateWeekSlots(new Date());

    const weekIsIncremental = week
      .reduce((weekIsIncremental: boolean, weekDay: CalendarDay, index: number, week: CalendarDay[]): boolean => {
        return weekIsIncremental && (index === 0 || weekDay.day.getDay() > week[index -1].day.getDay());
      }, true);

    expect(weekIsIncremental).toBe(true);
  });

  test('it must have the given date included in the week slots', function () {
    const currentDate = new Date();
    const week = WeekSlotGenerator.generateWeekSlots(currentDate);

    expect(week).toEqual(expect.arrayContaining([{ day: currentDate }]));
  });
});