import React from 'react';

import * as CardImg from '../../assets/cards';
import { CatalogItem, PageNavBar } from '../../components';
import styles from './Catalog.module.scss';

export const Catalog = () => {
  return (
    <div className={styles.catalog} id="catalog">
      <div className={styles.catalog__header}>
        <PageNavBar pageName="Каталог" />
      </div>

      <div className={styles.catalog__content}>
        <CatalogItem itemName="Видеокамеры" img={CardImg.camera} imgBW={CardImg.cameraBW} />
        <CatalogItem itemName="Видеосвет" img={CardImg.light} imgBW={CardImg.lightBW} />
        <CatalogItem itemName="Грип" img={CardImg.grip} imgBW={CardImg.gripBW} />
        <CatalogItem itemName="Штативы" img={CardImg.grip} imgBW={CardImg.gripBW} />
        <CatalogItem itemName="Аудио" img={CardImg.sound} imgBW={CardImg.soundBW} />
        <CatalogItem itemName="Микрофоны" img={CardImg.sound} imgBW={CardImg.soundBW} />
        <CatalogItem itemName="Спецэффекты" img={CardImg.sfx} imgBW={CardImg.sfxBW} />
        <CatalogItem itemName="Аксессуары" img={CardImg.location} imgBW={CardImg.locationBW} />
      </div>
    </div>
  );
};
