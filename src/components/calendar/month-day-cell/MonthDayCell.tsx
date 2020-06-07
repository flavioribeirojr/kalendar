import React from 'react';
import { MonthDayCellProps } from '../types';
import { className } from '../../../utils';
import styles from './MonthDayCell.module.css';

export function MonthDayCell({ day, onDayClicked }: MonthDayCellProps) {
  function onDateSelected() {
    onDayClicked(day.day);
  }

  return (
    <div
      onClick={onDateSelected}
      className={className({
        [styles.monthDayCell]: true,
        [styles.differentMonth]: !day.dayIsOnSameMonth
      })}
    >
      {day.day.getDate()}
    </div>
  );
}