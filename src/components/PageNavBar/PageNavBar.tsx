import React, { FC } from 'react';

import styles from './PageNavBar.module.scss';

interface PageNavBarProps {
  pageName: string;
}

export const PageNavBar: FC<PageNavBarProps> = ({ pageName }) => {
  return (
    <div className={styles.navbar}>
      <p className={styles.navbar__page}>{pageName}</p>
      <p className={styles.navbar__title}>Большой выбор профессиональной аппаратуры для съемок</p>
    </div>
  );
};
