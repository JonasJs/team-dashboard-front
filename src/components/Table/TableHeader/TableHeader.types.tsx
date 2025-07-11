import type { TableColumn } from '../Table.types';

export type SortDirection = 'asc' | 'desc';

export interface TableHeaderProps {
  columns: TableColumn[];
  onSort?: (columnKey: string, direction: SortDirection) => void;
  sortColumn?: string;
  sortDirection?: SortDirection;
}

export interface UseTableHeaderProps {
  columns: TableColumn[];
  onSort?: (columnKey: string, direction: SortDirection) => void;
  sortColumn?: string;
  sortDirection?: SortDirection;
}
