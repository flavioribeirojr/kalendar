import React from 'react';
import { Icon } from '../icon';
import Config from '../../config';
import styles from './Footer.module.css';

const { author } = Config.app;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <address className={styles.footerAuthor}>
        <h2 className={styles.footerAuthorTitle}>
          {author.name}
        </h2>
        {
          author
            .links
            .map(link => (
              <a
                key={link.link}
                href={link.link}
                className={styles.footerAuthorLink}
              >
                <Icon
                  name={link.icon}
                  className={styles.footerAuthorLinkIcon}
                />
              </a>
            ))
        }
      </address>
    </footer>
  );
}