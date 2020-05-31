import React from 'react';
import { MonthSlotsGenerator } from './month-slots-generator';
import { WeekSlotsGenerator } from './week-slots-generator';
import styles from './Calendar.module.css';

export function Calendar() {
  const monthDaysSlots = MonthSlotsGenerator.generateForDate(new Date(), WeekSlotsGenerator.generateWeekSlots);

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarGrid}>
        {
          monthDaysSlots
            .map(monthDaySlot => (
              <div key={monthDaySlot.day.toDateString()}>
                { monthDaySlot.day.getDate() }
              </div>
            ))
        }
      </div>
    </div>
  );
}