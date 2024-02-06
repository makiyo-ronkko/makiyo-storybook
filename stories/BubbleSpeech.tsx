import React from 'react';
import styles from './bubbleSpeech.module.css';
import { Color, TextColor } from './types/index';

export interface BubbleSpeechProps {
  children: string;
  backgroundColor?: Color;
  shadowColor?: Color;
  color?: TextColor;
}

export const BubbleSpeech = ({
  children,
  backgroundColor = 'nude',
  shadowColor = 'primary-dark',
  color = 'text-white',
}: BubbleSpeechProps) => {
  return (
    <p
      className={`${styles.bubbleSpeech} ${styles[backgroundColor]} ${
        styles[`text-${color}`]
      } ${styles[`shadow-${shadowColor}`]}`}
    >
      {children}
    </p>
  );
};
