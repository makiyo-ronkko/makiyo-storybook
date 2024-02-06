import React, { useMemo } from 'react';
import styles from './button.module.css';
import { StyleWrapper } from './hoc/StyleWrapper';
import { Color } from './types/index';
import { Typography } from './Typography';
import { classNames } from './utils/index';
import { Loader } from './Loader';

export interface ButtonProps {
  isLoading?: boolean;
  outlined?: boolean;
  outlineColor?: Color;
  children: React.ReactNode;
  className: React.CSSProperties;
}

export const Button = StyleWrapper(
  ({ children, className, isLoading, outlined = false, outlineColor = 'primary', ...props }: ButtonProps) => {
    const outline = useMemo(() => {
      const style: React.CSSProperties = {};
      if (outlined) {
        style.borderColor = `var(--color-${outlineColor})`;
      }
      return style;
    }, [outlined, outlineColor]);

    return (
      <button
        data-testid="button-component"
        className={`${styles.button} ${classNames({
          [styles.outline]: outlined,
        })} ${className}`}
        style={outline}
        {...props}
      >
        <Typography variant="subtitle" type="span" className={styles.textContainer}>
          {isLoading ? <Loader /> : children}
        </Typography>
      </button>
    );
  },
);
