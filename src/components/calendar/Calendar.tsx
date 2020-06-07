import React from 'react';
import { MonthSlotsGenerator } from './month-slots-generator';
import { CreateWeekSlotsGenerator } from './week-slots-generator';
import { Header as DefaultHeader } from './header';
import { MonthDayCell as DefaultMonthDayCell } from './month-day-cell';
import { Header, MonthDayCell } from './types';
import { createDayOfMonthGenerator } from './month-day-creator';
import { useCalendarState } from './useCalendarState';
import styles from './Calendar.module.css';
import { WeekNames } from './week-names/WeekNames';

type CalendarProps = {
  header?: Header,
  monthDayCell?: MonthDayCell,
  defaultDate?: Date
};

export function Calendar({
  header: CalendarHeader = DefaultHeader,
  monthDayCell: MonthDayCell = DefaultMonthDayCell,
  defaultDate = new Date()
}: CalendarProps) {
  const { activeDate, changeToNextMonth, changeToPreviousMonth } = useCalendarState(defaultDate);
  const weekSlotGenerator = CreateWeekSlotsGenerator(createDayOfMonthGenerator(activeDate));
  const monthDaysSlots = MonthSlotsGenerator.generateForDate(activeDate, weekSlotGenerator.generateWeekSlots);

  return (
    <div className={styles.calendar}>
      <CalendarHeader
        activeDate={activeDate}
        changeToNextMonth={changeToNextMonth}
        changeToPreviousMonth={changeToPreviousMonth}
      />
      <WeekNames />
      <div className={styles.calendarGrid}>
        {
          monthDaysSlots
            .map(monthDaySlot => (
              <MonthDayCell
                key={monthDaySlot.day.toDateString()}
                day={monthDaySlot}
              />
            ))
        }
      </div>
    </div>
  );
}