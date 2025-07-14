import { memo } from 'react';
import type { TableBodyProps } from './Body.types';

function TableBodyComponent({
  children,
  className = '',
  ...props
}: TableBodyProps) {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
}

export const TableBody = memo(TableBodyComponent);
TableBody.displayName = 'TableBody';
