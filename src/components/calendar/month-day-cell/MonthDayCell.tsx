import React from 'react';
import { MonthDayCellProps } from '../month-day-cell.type';
import { className } from '../../../utils';
import styles from './MonthDayCell.module.css';

export function MonthDayCell({ day }: MonthDayCellProps) {
  return (
    <div
      className={className({
        [styles.monthDayCell]: true,
        [styles.differentMonth]: !day.dayIsOnSameMonth
      })}
    >
      {day.day.getDate()}
    </div>
  );
}