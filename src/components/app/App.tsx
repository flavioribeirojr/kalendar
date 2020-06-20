import React from 'react';
import styles from './App.module.css';
import { Header } from '../header';
import { Footer } from '../footer';
import { Calendar } from '../calendar';
import { EventOutlet } from '../event-outlet/EventOutlet';
import { useNavigator } from '../../hooks/navigator';

export function App(): React.ReactElement {
  const navigator = useNavigator();

  function onCalendarDateSelected(date: Date) {
    navigator.navigateTo(`/new-event?date=${date.toISOString()}`);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Calendar onDateSelected={onCalendarDateSelected} />
        <div className={styles.events}>
          <EventOutlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}