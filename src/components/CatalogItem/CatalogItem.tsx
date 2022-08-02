import React, { FC } from 'react';

import { camera, cameraBW } from '../../assets/cards';
import styles from './CatalogItem.module.scss';

interface CatalogItemProps {
  itemName: string;
  img?: string;
}

export const CatalogItem: FC<CatalogItemProps> = ({ itemName, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img className={styles.card__image_bw} src={cameraBW} alt={img} />

        <img className={styles.card__image_main} src={camera} alt={img} />
      </div>

      <p className={styles.card__name}>{itemName}</p>
    </div>
  );
};
