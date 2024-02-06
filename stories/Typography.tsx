import React from 'react';
import styles from './typography.module.css';
import { classNames } from './utils/index';

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle'
  | 'body1'
  | 'body2'
  | 'button-text'
  | 'caption-text'
  | 'description-text'
  | 'overline-text';

type Type = 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TypographyProps {
  variant: Variant;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  type?: Type;
}

const elements = {
  div: 'div',
  p: 'p',
  span: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

export const Typography = ({ variant, className = '', type = 'span', children, ...props }: TypographyProps) => {
  return React.createElement(
    elements[type],
    {
      className: `${classNames({
        [styles[variant]]: variant,
      })} ${className}`,
      ...props,
    },
    children,
  );
};
