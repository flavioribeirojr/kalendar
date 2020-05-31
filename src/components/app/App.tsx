import React from 'react';
import styles from './App.module.css';
import { Header } from '../header';
import { Footer } from '../footer';
import { Calendar } from '../calendar';

export function App(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Calendar />
      </main>
      <Footer />
    </div>
  );
}