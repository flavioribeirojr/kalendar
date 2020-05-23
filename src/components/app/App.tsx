import React from 'react';
import styles from './App.module.css';
import { Header } from '../header';
import { Footer } from '../footer';

export function App(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        Work in progress
      </main>
      <Footer />
    </div>
  );
}