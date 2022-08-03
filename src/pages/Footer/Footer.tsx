import React from 'react';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.footer__content}>
        <p>Обратный звонок</p>
        <p>Футер</p>
      </div>
    </div>
  );
};
