import React, { useMemo } from 'react';
import styles from './loader.module.css';
import { Width } from './types/index';

export interface LoaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  width?: Width;
}

export const Loader = ({ className = '', width = 'xxs', style, ...props }: LoaderProps) => {
  const getWidth = () => {
    const style: React.CSSProperties = {};
    style.width = `var(--element-${width})`;
    return style;
  };
  const loaderWidth = useMemo(() => getWidth(), [width]);
  return (
    <div
      className={`${styles.loader} ${className}`}
      style={{
        ...style,
        ...loaderWidth,
      }}
      {...props}
    ></div>
  );
};
