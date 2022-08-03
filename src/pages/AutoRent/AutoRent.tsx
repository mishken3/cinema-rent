import React from 'react';

import { ButtonComp, PageNavBar } from '../../components';
import styles from './AutoRent.module.scss';

export const AutoRent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.autorent} id="auto-rent">
        <header className={styles.autorent__header}>
          <PageNavBar pageName="Аренда транспорта" />
        </header>
        <div className={styles.autorent__body}>
          <div className={styles.content}>
            <p>
              Предоставляем в аренду Камервагены, идеально приспособленные для перевозки техники,
              аппаратуры. В нем оборудованы специальные полки и крепления. Поэтому даже в самых
              экстремальных условиях можно быть уверенным: кинокамеры доедут до точки съемки в
              целости и сохранности. В таком фургоне можно не только безопасно перевозить
              кинокамеры, но и осуществлять необходимое техническое обслуживание.
            </p>
            <ButtonComp text="Арендовать транспорт" size="big" />
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
