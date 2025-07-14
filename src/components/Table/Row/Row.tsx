import { memo } from 'react';
import styles from './Row.module.css';
import type { TableRowProps } from './Row.types';

function TableRowComponent({
  children,
  className = '',
  ...props
}: TableRowProps) {
  return (
    <tr className={`${styles.row} ${className}`} {...props}>
      {children}
    </tr>
  );
}

export const TableRow = memo(TableRowComponent);
TableRow.displayName = 'TableRow';
