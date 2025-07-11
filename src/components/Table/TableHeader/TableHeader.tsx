import { memo } from 'react';
import type { TableHeaderProps } from './TableHeader.types';
import { tableHeaderCellVariants } from './TableHeader.variants';
import styles from './TableHeader.module.css';
import { Icon } from '@/components/Icons/Icons';
import { useTableHeader } from './useTableHeader';

function TableHeaderComponent({
  columns,
  onSort,
  sortColumn,
  sortDirection = 'asc',
}: TableHeaderProps) {
  const {
    isMobile,
    visibleColumns,
    getSortIcon,
    handleClickCell,
    handleKeyDown,
  } = useTableHeader({
    columns,
    onSort,
    sortColumn,
    sortDirection,
  });

  return (
    <div className={styles.container} role="row">
      {visibleColumns.map((column) => {
        const hasFixedWidth = !!column.width;

        const tableHeaderCellStyles = tableHeaderCellVariants({
          sortable: column.sortable,
          textAlign: column.align,
          hasFixedWidth,
        });

        return (
          <div
            key={column.key}
            data-column={column.key}
            style={{
              width: column.width,
              minWidth: column.width ? undefined : '80px',
            }}
            className={tableHeaderCellStyles}
            role="columnheader"
            tabIndex={column.sortable ? 0 : -1}
            aria-label={
              column.sortable
                ? `${column.label}, ordenável. ${sortColumn === column.key ? `Atualmente ordenado ${sortDirection === 'asc' ? 'crescente' : 'decrescente'}` : 'Não ordenado'}. Pressione Enter ou Espaço para ordenar.`
                : column.label
            }
            aria-sort={
              column.sortable && sortColumn === column.key
                ? sortDirection === 'asc'
                  ? 'ascending'
                  : 'descending'
                : column.sortable
                  ? 'none'
                  : undefined
            }
            onClick={() => {
              handleClickCell(column);
            }}
            onKeyDown={(event) => {
              handleKeyDown(event, column);
            }}
          >
            <span title={column.label}>{column.label}</span>
            {column.sortable && (
              <div className={styles.sortIcon} aria-hidden="true">
                <Icon
                  size={14}
                  name={getSortIcon(column.key)}
                  color="currentColor"
                />
              </div>
            )}
          </div>
        );
      })}
      {isMobile && (
        <div
          className={styles.circle}
          role="presentation"
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
}

export const TableHeader = memo(TableHeaderComponent);
TableHeader.displayName = 'TableHeader';
