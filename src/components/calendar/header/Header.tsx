import React from 'react';
import { HeaderProps } from '../header.type';
import { MonthNames } from '../Constants';
import { Icon, IconNames } from '../../icon';
import styles from './Header.module.css';

export function Header({ activeDate }: HeaderProps) {
  return (
    <div className={styles.calendarHead}>
      <h3 className={styles.calendarHeadTitle}>
        { MonthNames[activeDate.getMonth()] }, { activeDate.getFullYear() }
      </h3>
      <div className={styles.calendarHeadOptions}>
        <button className={styles.calendarHeadOptionsButton}>
          <Icon
            name={IconNames.angleLeft}
          />
        </button>
        <button className={styles.calendarHeadOptionsButton}>
          <Icon
            name={IconNames.angleRight}
          />
        </button>
      </div>
    </div>
  );
}