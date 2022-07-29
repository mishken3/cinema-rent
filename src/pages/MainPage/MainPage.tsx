import React from 'react';

import { mainLogo, partnersImg } from '../../assets/icons';
import { AdressBar, NavBar } from '../../components';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <header className={styles.header}>
        <AdressBar />
        <NavBar />
      </header>

      <main className={styles.main}>
        <div className={styles.main__content}>
          <img className={styles.main__logo} src={mainLogo} alt="2.39 logo" />
          <section className={styles.main__title}>
            <p className={styles.main__title_tagline}>Фокус. Камера. Мотор</p>
            <p className={styles.main__title_info}>Аренда профессиональной видео-техники</p>
          </section>
          <button className={styles.main__title_btn}>Посмотреть каталог</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <ul className={styles.footer__partners}>
          <li>
            <img src={partnersImg.tnt} alt="2.39 small logo" />
          </li>
          <li>
            <img src={partnersImg.kinopoisk} alt="2.39 small logo" />{' '}
          </li>
          <li>
            <img src={partnersImg.ivi} alt="2.39 small logo" />{' '}
          </li>
          <li>
            <img src={partnersImg.vk} alt="2.39 small logo" />{' '}
          </li>
          <li>
            <img src={partnersImg.ctc} alt="2.39 small logo" />{' '}
          </li>
        </ul>
      </footer>
    </div>
  );
};
