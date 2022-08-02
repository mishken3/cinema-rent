import React from 'react';

import { navImg } from '../../assets/icons';
import styles from './MainNavBar.module.scss';

export const MainNavBar = () => {
  const mainPageURL = window.location.origin;

  return (
    <>
      <div className={styles.adressbar}>
        <p className={styles.adressbar__adress}>Москва, 2-ая Юго-Западная, дом 7</p>
        <p className={styles.adressbar__number}>+7 (495) 211-13-00</p>
      </div>

      <div className={styles.navbar}>
        <a className={styles.navbar__logo_btn} href={mainPageURL}>
          <img className={styles.navbar__logo_img} src={navImg.logo} alt="2.39 small logo" />
        </a>

        <nav className={styles.navbar__nav}>
          <ul>
            <li>
              <a href="#catalog">Камеры</a>
            </li>
            <li>
              <a href="#catalog">Оптика</a>
            </li>
            <li>
              <a href="#catalog">Аксессуары</a>
            </li>
            <li>
              <a href="#auto-rent">Транспортировка</a>
            </li>
            <li>
              <a href="#footer">Контакты</a>
            </li>
          </ul>
        </nav>

        <div className={styles.navbar__icons}>
          <img src={navImg.basket} alt="Basket icon" />
          <img src={navImg.loupe} alt="Finder loupe icon" />
        </div>
      </div>
    </>
  );
};
