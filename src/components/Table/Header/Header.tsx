import { memo } from 'react';
import type { TableHeaderProps } from './Header.types';
import styles from './Header.module.css';

function TableHeaderComponent({
  children,
  className = '',
  ...props
}: TableHeaderProps) {
  return (
    <thead className={`${styles.header} ${className}`} {...props}>
      {children}
    </thead>
  );
}

export const TableHeader = memo(TableHeaderComponent);
TableHeader.displayName = 'TableHeader';
