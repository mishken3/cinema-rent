import React from 'react';

import { basket, logoSmall, loupe } from '../../assets/icons';
import { PersonalInfo } from '../../data';
import styles from './MainNavBar.module.scss';

export const MainNavBar = () => {
  const mainPageURL = window.location.origin;

  return (
    <>
      <div className={styles.adressbar}>
        <p className={styles.adressbar__adress}>{PersonalInfo.address}</p>
        <p className={styles.adressbar__number}>{PersonalInfo.phone}</p>
      </div>

      <div className={styles.navbar}>
        <a className={styles.navbar__logo_btn} href={mainPageURL}>
          <img className={styles.navbar__logo_img} src={logoSmall} alt="2.39 small logo" />
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
          <img src={basket} alt="Basket icon" />
          <img src={loupe} alt="Finder loupe icon" />
        </div>
      </div>
    </>
  );
};
