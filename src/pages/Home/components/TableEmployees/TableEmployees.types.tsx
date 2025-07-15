import type { Employee } from '@/domain/Employee/employee.types';
import type { Column } from '../../home.types';
import type { SortDirection } from '@/components/Table/Table.types';

export interface TableEmployeesProps {
  columns: Column[];
  employees: Employee[];
  onSort?: (columnKey: string, direction: SortDirection) => void;
  sortColumn?: string | null;
  sortDirection?: SortDirection;
}
