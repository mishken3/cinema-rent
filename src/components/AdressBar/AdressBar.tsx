import React from 'react';

import styles from './AdressBar.module.scss';

export const AdressBar = () => {
  return (
    <div className={styles.adressbar}>
      <p className={styles.adressbar__adress}>Москва, 2-ая Юго-Западная, дом 7</p>
      <p className={styles.adressbar__number}>+7 (495) 211-13-00</p>
    </div>
  );
};
