import cn from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  size?: 'small' | 'big';
}

export const ButtonComp: FC<ButtonProps> = ({ text, size = 'small' }) => {
  const isBigButton = size === 'big';

  return <button className={cn(styles.button, isBigButton && styles.button__big)}>{text}</button>;
};
