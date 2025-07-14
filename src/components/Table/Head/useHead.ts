import type { IconName } from '../../Icons/Icons.types';
import type { UseHeadProps, UseHeadResponse } from './Head.types';

export function useHead({
  columnKey,
  onSort,
  sortDirection,
  sortable,
}: UseHeadProps): UseHeadResponse {
  function handleSort() {
    if (sortable && columnKey && onSort) {
      const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      onSort(columnKey, newDirection);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (sortable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      handleSort();
    }
  }

  function getSortIcon(): IconName {
    if (!sortable || !sortDirection) {
      return 'chevrons-up-down';
    }
    return sortDirection === 'asc' ? 'chevron-up' : 'chevrons-down';
  }

  return {
    handleSort,
    handleKeyDown,
    getSortIcon,
  };
}
