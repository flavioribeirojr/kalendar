import React from 'react';
import { CalendarDay } from './day.type';

export type MonthDayCellProps = {
  day: CalendarDay,
  onDayClicked: (date: Date) => void
};

export type MonthDayCell = (props: MonthDayCellProps) => React.ReactElement;