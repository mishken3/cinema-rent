import React from 'react';

import { basket, logo, loupe } from '../../assets/icons/nav';
import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.navbar__logo} src={logo} alt="2.39 small logo" />

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
        <img src={basket} alt="Basket icon" />
        <img src={loupe} alt="Finder loupe icon" />
      </div>
    </div>
  );
};
