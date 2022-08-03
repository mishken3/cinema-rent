import React from 'react';

import * as Icons from '../../assets/icons';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.content}>
        <div className={styles.content__logo}>
          <a href="#mainpage">
            <img
              className={styles.content__logo_img}
              src={Icons.logoBig}
              alt="2.39 big footer logo"
            />
          </a>
        </div>

        <div className={styles.content__info}>
          <div className={styles.content__info_time}>
            <img src={Icons.open} alt="Open time icon" />

            <p>Открыто 24/7</p>
          </div>

          <div className={styles.content__info_adress}>
            <img src={Icons.gps} alt="Adress icon" />

            <p>Москва, 2-ая Юго-Западная, дом 7</p>
          </div>

          <div className={styles.content__info_mail}>
            <img src={Icons.mail} alt="Mail icon" />

            <p>rental@rent.rent</p>
          </div>
        </div>

        <div className={styles.content__contacts}>
          <div className={styles.content__contacts_phone}>
            <img src={Icons.phone} alt="Phone icon" />

            <p>+7 (495) 211-13-00</p>
          </div>
        </div>

        <div className={styles.content__socials}>
          <div className={styles.content__socials_links}>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={Icons.fb} alt="Facebook icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={Icons.ig} alt="Instagram icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
