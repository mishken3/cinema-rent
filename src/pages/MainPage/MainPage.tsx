import React from 'react';

import { logoBig } from '../../assets';
import * as PartnersImg from '../../assets/partners';
import { ButtonComp, MainNavBar } from '../../components';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.mainpage} id="mainpage">
      <header className={styles.header}>
        <MainNavBar />
      </header>

      <main className={styles.main}>
        <div className={styles.main__content}>
          <img className={styles.main__logo} src={logoBig} alt="2.39 logo" />
          <section className={styles.main__title}>
            <p className={styles.main__title_tagline}>Фокус. Камера. Мотор</p>
            <p className={styles.main__title_info}>Аренда профессиональной видео-техники</p>
          </section>

          <ButtonComp text="Посмотреть каталог" link="#catalog" />
        </div>
      </main>

      <footer className={styles.footer}>
        <ul className={styles.footer__partners}>
          <li>
            <img src={PartnersImg.tnt} alt="2.39 small logo" />
          </li>
          <li>
            <img src={PartnersImg.kinopoisk} alt="2.39 small logo" />{' '}
          </li>
          <li>
            <img src={PartnersImg.ivi} alt="2.39 small logo" />{' '}
          </li>
          <li>
            <img src={PartnersImg.vk} alt="2.39 small logo" />{' '}
          </li>
          <li>
            <img src={PartnersImg.ctc} alt="2.39 small logo" />{' '}
          </li>
        </ul>
      </footer>
    </div>
  );
};
