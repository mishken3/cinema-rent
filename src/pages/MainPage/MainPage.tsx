import React from 'react';

import { mainLogo } from '../../assets/icons';
import { ctc, ivi, kinopoisk, tnt, vk } from '../../assets/icons/partners';
import { AdressBar, NavBar } from '../../components';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.navs}>
        <AdressBar />
        <NavBar />
      </div>

      <div className={styles.body}>
        <div className={styles.body__content}>
          <img className={styles.body__logo} src={mainLogo} alt="2.39 logo" />
          <section className={styles.body__title}>
            <p className={styles.body__title_tagline}>Фокус. Камера. Мотор</p>
            <p className={styles.body__title_info}>Аренда профессиональной видео-техники</p>
          </section>
          <button className={styles.body__title_btn}>Посмотреть каталог</button>
        </div>
      </div>

      <footer>
        <ul className={styles.body__partners}>
          <li>
            <img src={tnt} alt="2.39 small logo" />
          </li>
          <li>
            <img src={kinopoisk} alt="2.39 small logo" />{' '}
          </li>
          <li>
            <img src={ivi} alt="2.39 small logo" />{' '}
          </li>
          <li>
            <img src={vk} alt="2.39 small logo" />{' '}
          </li>
          <li>
            <img src={ctc} alt="2.39 small logo" />{' '}
          </li>
        </ul>
      </footer>
    </div>
  );
};
