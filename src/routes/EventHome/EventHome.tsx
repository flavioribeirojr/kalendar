import React from 'react';
import styles from './EventHome.module.css';

export function EventHome() {
  return (
    <div className={styles.eventHome}>
      <p className={styles.eventHomeMessage}>
        Click on a date to create a new Event
      </p>
    </div>
  );
}