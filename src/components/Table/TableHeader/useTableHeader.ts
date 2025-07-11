import { useIsMobile } from '@/hooks/useIsMobile';
import type { IconName } from '@/components/Icons/Icons.types';
import type { TableColumn } from '../Table.types';
import type { SortDirection, UseTableHeaderProps } from './TableHeader.types';

export function useTableHeader({
  columns,
  onSort,
  sortColumn,
  sortDirection = 'asc',
}: UseTableHeaderProps) {
  const isMobile = useIsMobile();

  const visibleColumns = columns.filter((column) => {
    return isMobile ? !column.hideOnMobile : true;
  });

  function handleSort(columnKey: string) {
    if (!onSort) return;

    let newDirection: SortDirection = 'asc';

    if (sortColumn === columnKey) {
      newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    }

    onSort(columnKey, newDirection);
  }

  function getSortIcon(columnKey: string): IconName {
    if (sortColumn !== columnKey) {
      return 'chevrons-up-down';
    }
    return sortDirection === 'asc' ? 'chevron-up' : 'chevrons-down';
  }

  function handleClickCell({ sortable = false, key }: TableColumn) {
    if (!sortable) {
      return;
    }
    handleSort(key);
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
    column: TableColumn
  ) {
    if (column.sortable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      handleSort(column.key);
    }
  }

  return {
    isMobile,
    visibleColumns,
    handleSort,
    getSortIcon,
    handleClickCell,
    handleKeyDown,
  };
}
