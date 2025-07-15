import type { SortDirection, TextAlign } from '@/components/Table';
import type { Employee } from '@/domain/Employee/employee.types';

export interface Column {
  key: string;
  label: string;
  width?: string;
  align: TextAlign;
  sortable?: boolean;
  hideOnMobile?: boolean;
}

export interface UseHomePage {
  employees: Employee[];
  columns: Column[];
  sortColumn?: string;
  sortDirection?: SortDirection;
  handleSort: (columnKey: string) => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  employeesTotalItems: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  handleSetItemsPerPage: (itemsPerPage: string) => void;
}
