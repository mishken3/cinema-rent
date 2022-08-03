import React from 'react';

import * as Icons from '../../assets/icons';
import { PersonalInfo } from '../../data';
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

            <p>{PersonalInfo.address}</p>
          </div>

          <div className={styles.content__info_mail}>
            <img src={Icons.mail} alt="Mail icon" />

            <p>{PersonalInfo.email}</p>
          </div>
        </div>

        <div className={styles.content__contacts}>
          <div className={styles.content__contacts_phone}>
            <img src={Icons.phone} alt="Phone icon" />

            <p>{PersonalInfo.phone}</p>
          </div>
        </div>

        <div className={styles.content__socials}>
          <div className={styles.content__socials_links}>
            <a href={PersonalInfo.fb} target="_blank">
              <img src={Icons.fb} alt="Facebook icon" />
            </a>
            <a href={PersonalInfo.ig} target="_blank">
              <img src={Icons.ig} alt="Instagram icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
