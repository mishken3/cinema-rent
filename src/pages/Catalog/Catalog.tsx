import React from 'react';

import { PageNavBar } from '../../components';
import styles from './Catalog.module.scss';

export const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <PageNavBar pageName="Каталог" />

      <div className={styles.catalog__content}>
        <div>TestDiv</div>
        <div>TestDiv</div>
        <div>TestDiv</div>
        <div>TestDiv</div>

        <div>TestDiv</div>
        <div>TestDiv</div>
        <div>TestDiv</div>
        <div>TestDiv</div>
      </div>
    </div>
  );
};
