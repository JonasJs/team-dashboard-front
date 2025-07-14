import type { IconName } from '@/components/Icons/Icons.types';
import type { SortDirection, TextAlign } from '../Table.types';

export interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  sortable?: boolean;
  sortDirection?: SortDirection;
  columnKey?: string;
  width?: string;
  align?: TextAlign;
  onSort?: (columnKey: string, direction: SortDirection) => void;
}

export interface UseHeadProps {
  columnKey?: string;
  onSort?: (columnKey: string, direction: SortDirection) => void;
  sortDirection?: SortDirection;
  sortable: boolean;
}

export interface UseHeadResponse {
  handleSort: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  getSortIcon: () => IconName;
}
