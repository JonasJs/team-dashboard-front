import styles from './Pagination.module.css';
import { usePagination } from './usePagination';
import type { PaginationProps } from './Pagination.types';
import { Icon } from '../Icons/Icons';

export function Pagination({
  totalItems,
  itemsPerPage,
  onPageChange,
  setItemsPerPage,
}: PaginationProps) {
  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    paginationRange,
    startItem,
    endItem,
    handleClickButtonPage,
    handleSelectItemsPerPage,
  } = usePagination({
    totalItems,
    itemsPerPage,
    onPageChange,
    setItemsPerPage,
  });

  return (
    <div className={styles.pagination}>
      <div className={styles.selectContainer}>
        <select onChange={handleSelectItemsPerPage}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span>Registros por página</span>
      </div>

      <div className={styles.paginationControls}>
        <div>
          <button
            type="button"
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`${styles.actionButton} ${currentPage === 1 ? styles.disabled : ''}`}
          >
            <Icon name="chevron-left" />
            <span>Anterior</span>
          </button>
          {paginationRange.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => {
                handleClickButtonPage(page);
              }}
              className={`${styles.pageButton} ${currentPage === page ? styles.active : ''}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={nextPage}
            type="button"
            disabled={currentPage === totalPages}
            className={`${styles.actionButton} ${currentPage === totalPages ? styles.disabled : ''}`}
          >
            <span>Próximo</span>
            <Icon name="chevron-right" />
          </button>
        </div>
        <span>
          Mostrando {startItem} - {endItem} de {totalItems} registros
        </span>
      </div>
    </div>
  );
}
