import React, { FC } from 'react';

import styles from './CatalogItem.module.scss';

interface CatalogItemProps {
  itemName: string;
  img: string;
  imgBW: string;
}

export const CatalogItem: FC<CatalogItemProps> = ({ itemName, img, imgBW }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img className={styles.card__image_bw} src={imgBW} alt={imgBW} />

        <img className={styles.card__image_main} src={img} alt={img} />
      </div>

      <p className={styles.card__name}>{itemName}</p>
    </div>
  );
};
