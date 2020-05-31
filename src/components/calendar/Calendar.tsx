import React from 'react';
import { MonthSlotsGenerator } from './month-slots-generator';
import { CreateWeekSlotsGenerator } from './week-slots-generator';
import { Header as DefaultHeader } from './header';
import { MonthDayCell as DefaultMonthDayCell } from './month-day-cell';
import { Header } from './header.type';
import { MonthDayCell } from './month-day-cell.type';
import { createDayOfMonthGenerator } from './month-day-creator';
import styles from './Calendar.module.css';

type CalendarProps = {
  header?: Header,
  monthDayCell?: MonthDayCell
};

export function Calendar({
  header: CalendarHeader = DefaultHeader,
  monthDayCell: MonthDayCell = DefaultMonthDayCell
}: CalendarProps) {
  const activeDate = new Date();
  const weekSlotGenerator = CreateWeekSlotsGenerator(createDayOfMonthGenerator(activeDate));
  const monthDaysSlots = MonthSlotsGenerator.generateForDate(activeDate, weekSlotGenerator.generateWeekSlots);

  return (
    <div className={styles.calendar}>
      <CalendarHeader
        activeDate={activeDate}
      />
      <div className={styles.calendarGrid}>
        {
          monthDaysSlots
            .map(monthDaySlot => (
              <MonthDayCell
                key={monthDaySlot.day.getTime()}
                day={monthDaySlot}
              />
            ))
        }
      </div>
    </div>
  );
}