import React from 'react';
import { DefaultWeekNames } from './default-weeknames';
import styles from './WeekNames.module.css';

export function WeekNames({ weeknames = DefaultWeekNames }) {
  return (
    <div className={styles.weeknamesGrid}>
      {
        weeknames
          .map((weekname, index) => (
            <p
              className={styles.weeknamesGridText}
              key={`${weekname}-${index}`}
            >
              { weekname }
            </p>
          ))
      }
    </div>
  );
}