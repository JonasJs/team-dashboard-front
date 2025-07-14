import { memo } from 'react';
import styles from './Head.module.css';
import type { TableHeadProps } from './Head.types';
import { useHead } from './useHead';
import { Icon } from '../../Icons/Icons';
import { HeadVariants } from './Head.variants';

function TableHeadComponent({
  children,
  className = '',
  sortable,
  sortDirection,
  columnKey,
  onSort,
  width,
  align,
  ...props
}: TableHeadProps) {
  const { handleSort, handleKeyDown, getSortIcon } = useHead({
    columnKey,
    onSort,
    sortDirection,
    sortable: Boolean(sortable),
  });

  const headStyles = HeadVariants({
    textAlign: align,
  });

  return (
    <th
      className={`${styles.head} ${className}`}
      onClick={handleSort}
      onKeyDown={handleKeyDown}
      tabIndex={sortable ? 0 : -1}
      role={sortable ? 'button' : undefined}
      style={{
        width,
        minWidth: width ? undefined : '80px',
      }}
      {...props}
    >
      <div className={headStyles}>
        {children}
        {sortable && (
          <div>
            <Icon size={14} name={getSortIcon()} color="currentColor" />
          </div>
        )}
      </div>
    </th>
  );
}

export const TableHead = memo(TableHeadComponent);
TableHead.displayName = 'TableHead';
