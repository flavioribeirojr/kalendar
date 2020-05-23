import React from 'react';
import { Icon, IconNames } from '../icon';
import styles from './Header.module.css';
import NavigationConfig from '../../config/navigation.config';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        Kalendar
      </h1>
      <nav className={styles.headerNav}>
        <a
          href={NavigationConfig.project}
          className={styles.headerNavLink}
        >
          <Icon
            name={IconNames.codeBranch}
            className={styles.headerNavLinkIcon}
          />
          Fork me
        </a>
      </nav>
    </header>
  );
}