export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange?: (page: number) => void;
  setItemsPerPage?: (itemsPerPage: string) => void;
}

export interface UsePaginationProps {
  totalItems: number;
  initialPage?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
  setItemsPerPage?: (itemsPerPage: string) => void;
}
