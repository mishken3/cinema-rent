import React from 'react';

import { CatalogItem, PageNavBar } from '../../components';
import styles from './Catalog.module.scss';

export const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <PageNavBar pageName="Каталог" />

      <div className={styles.catalog__content}>
        <CatalogItem itemName="Видеокамеры" />
        <CatalogItem itemName="Видеосвет" />
        <CatalogItem itemName="Грип" />
        <CatalogItem itemName="Штативы" />
        <CatalogItem itemName="Аудио" />
        <CatalogItem itemName="Микрофоны" />
        <CatalogItem itemName="Спецэффекты" />
        <CatalogItem itemName="Аксессуары" />
      </div>
    </div>
  );
};
