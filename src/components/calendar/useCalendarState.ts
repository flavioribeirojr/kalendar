import { useState } from 'react';

export function useCalendarState(defaultDate: Date) {
  const [ activeDate, setActiveDate ] = useState(defaultDate);

  function changeToPreviousMonth() {
    changeActiveDatMonth(activeDate.getMonth() -1);
  }

  function changeToNextMonth() {
    changeActiveDatMonth(activeDate.getMonth() + 1);
  }

  function changeActiveDatMonth(nextMonth: number) {
    const newDateMonth = new Date(activeDate);
    newDateMonth.setMonth(nextMonth);

    if (activeDate.getDate() !== newDateMonth.getDate()) {
      newDateMonth.setDate(0);
    }

    setActiveDate(newDateMonth);
  }

  return {
    activeDate,
    changeToPreviousMonth,
    changeToNextMonth
  };
}