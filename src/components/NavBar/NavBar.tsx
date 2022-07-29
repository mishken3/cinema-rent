import React from 'react';

import { navImg } from '../../assets/icons';
import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.navbar__logo} src={navImg.logo} alt="2.39 small logo" />

      <nav className={styles.navbar__nav}>
        <ul>
          <li>Камеры</li>
          <li>Оптика</li>
          <li>Аксессуары</li>
          <li>Транспортировка</li>
          <li>Контакты</li>
        </ul>
      </nav>

      <div className={styles.navbar__icons}>
        <img src={navImg.basket} alt="Basket icon" />
        <img src={navImg.loupe} alt="Finder loupe icon" />
      </div>
    </div>
  );
};
