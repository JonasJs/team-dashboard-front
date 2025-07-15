import type { Employee } from '@/domain/Employee/employee.types';

export interface MobileRowProps {
  employee: Employee;
  isExpanded: boolean;
  onExpand: (id: number) => void;
}
