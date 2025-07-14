import { memo } from 'react';
import styles from './Table.module.css';
import type { TableProps } from './Table.types';

function TableComponent({ children, className = '', ...props }: TableProps) {
  return (
    <table role="table" className={`${styles.table} ${className}`} {...props}>
      {children}
    </table>
  );
}

export const Table = memo(TableComponent);
Table.displayName = 'Table';
