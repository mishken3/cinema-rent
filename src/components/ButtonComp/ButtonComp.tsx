import cn from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  size?: 'small' | 'big';
  link?: string;
}

export const ButtonComp: FC<ButtonProps> = ({ text, size = 'small', link = '#' }) => {
  const isBigButton = size === 'big';

  return (
    <a className={cn(styles.button, isBigButton && styles.button__big)} href={link}>
      {text}
    </a>
  );
};
