import React from 'react';
import { Icon, IconNames } from '../../components/icon';
import styles from './NewEvent.module.css';

export function NewEvent() {
  return (
    <section className={styles.newEvent}>
      <header className={styles.newEventHeader}>
        <Icon name={IconNames.angleLeft} />
        <h2>
          New Event
        </h2>
      </header>
    </section>
  )
}