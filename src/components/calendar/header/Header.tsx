import React from 'react';
import { HeaderProps } from '../types';
import { MonthNames } from '../Constants';
import { Icon, IconNames } from '../../icon';
import styles from './Header.module.css';

export function Header({ activeDate, changeToNextMonth, changeToPreviousMonth }: HeaderProps) {
  return (
    <div className={styles.calendarHead}>
      <h3 className={styles.calendarHeadTitle}>
        { MonthNames[activeDate.getMonth()] }, { activeDate.getFullYear() }
      </h3>
      <div className={styles.calendarHeadOptions}>
        <button
          className={styles.calendarHeadOptionsButton}
          onClick={changeToPreviousMonth}
        >
          <Icon
            name={IconNames.angleLeft}
          />
        </button>
        <button
          className={styles.calendarHeadOptionsButton}
          onClick={changeToNextMonth}
        >
          <Icon
            name={IconNames.angleRight}
          />
        </button>
      </div>
    </div>
  );
}