import { memo } from 'react';
import type { TableCellProps } from './Cell.types';
import { CellVariants } from './Cell.variants';

function TableCellComponent({
  children,
  className = '',
  align,
  width,
  ...props
}: TableCellProps) {
  const cellStyles = CellVariants({
    textAlign: align,
  });

  return (
    <td
      className={`${cellStyles} ${className}`}
      {...props}
      style={{
        width,
        minWidth: width ? undefined : '80px',
      }}
    >
      {children}
    </td>
  );
}

export const TableCell = memo(TableCellComponent);
TableCell.displayName = 'TableCell';
