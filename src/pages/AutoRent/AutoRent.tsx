import React from 'react';

import { PageNavBar } from '../../components';
import styles from './AutoRent.module.scss';

export const AutoRent = () => {
  return (
    <div className={styles.autorent}>
      <PageNavBar pageName="Аренда транспорта" />
      <div className={styles.content}>
        <p>
          Предоставляем в аренду Камервагены, идеально приспособленные для перевозки техники,
          аппаратуры. В нем оборудованы специальные полки и крепления. Поэтому даже в самых
          экстремальных условиях можно быть уверенным: кинокамеры доедут до точки съемки в целости и
          сохранности. В таком фургоне можно не только безопасно перевозить кинокамеры, но и
          осуществлять необходимое техническое обслуживание.
        </p>
        <button>Арендовать транспорт</button>
      </div>
    </div>
  );
};
