import React, { FC } from 'react';

import { cameraBG } from '../../assets/icons';
import styles from './CatalogItem.module.scss';

interface CatalogItemProps {
  itemName: string;
}

export const CatalogItem: FC<CatalogItemProps> = ({ itemName }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={cameraBG} alt="###" />
      </div>
      <p className={styles.card__name}>{itemName}</p>
    </div>
  );
};
