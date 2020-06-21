import React from 'react';
import { EventFormProps } from './EventForm.props';
import styles from './EventForm.module.css';
import { Link } from '../../link/Link';
import { Icon, IconNames } from '../../icon';

export function EventForm({ title }: EventFormProps) {
  return (
    <section className={styles.eventForm}>
      <header className={styles.eventFormHeader}>
        <Link
          to="/"
          className={styles.eventFormHeaderLink}
        >
          <Icon name={IconNames.angleLeft} className={styles.eventFormHeaderLinkIcon} />
        </Link>
        <h3 className={styles.eventFormHeaderTitle}>
          { title }
        </h3>
      </header>
    </section>     
  );
}