import { useState } from 'react';
import type { UsePaginationProps } from './Pagination.types';

function getPaginationRange(current: number, total: number): number[] {
  const delta = 2;
  const range = [];

  const start = Math.max(1, current - delta);
  const end = Math.min(total, current + delta);

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
}

export function usePagination({
  totalItems,
  initialPage = 1,
  itemsPerPage = 10,
  onPageChange,
  setItemsPerPage,
}: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function goToPage(page: number) {
    const clamped = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(clamped);
    onPageChange?.(page);
  }

  function nextPage() {
    goToPage(currentPage + 1);
  }
  function prevPage() {
    goToPage(currentPage - 1);
  }

  function handleClickButtonPage(page: number) {
    goToPage(page);
  }

  function handleSelectItemsPerPage(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setCurrentPage(1);
    setItemsPerPage?.(event.target.value);
  }

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);

  const paginationRange = getPaginationRange(currentPage, totalPages);

  return {
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    paginationRange,
    startItem,
    endItem,
    handleClickButtonPage,
    handleSelectItemsPerPage,
  };
}
