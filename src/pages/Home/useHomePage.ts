import { useEffect, useState, useMemo } from 'react';
import { employeeServices } from '@/domain';
import type { Employee } from '@/domain/Employee/employee.types';
import { useIsMobile } from '@/hooks/useIsMobile';
import { COLUMNS } from './home.constants';
import type { UseHomePage } from './home.types';
import type { SortDirection } from '@/components/Table';

export function useHomePage(): UseHomePage {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [sortColumn, setSortColumn] = useState<string>();
  const [sortDirection, setSortDirection] = useState<SortDirection>();

  const isMobile = useIsMobile();

  const columns = isMobile
    ? COLUMNS.filter((column) => !column.hideOnMobile)
    : COLUMNS;

  const sortedEmployees = useMemo(() => {
    if (!sortColumn || !sortDirection) return employees;

    return [...employees].sort((a, b) => {
      const aValue = a[sortColumn as keyof Employee];
      const bValue = b[sortColumn as keyof Employee];
      if (sortColumn === 'admission_date') {
        const aDate = new Date(aValue as string);
        const bDate = new Date(bValue as string);

        return sortDirection === 'asc'
          ? aDate.getTime() - bDate.getTime()
          : bDate.getTime() - aDate.getTime();
      }

      return sortDirection === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [employees, sortColumn, sortDirection]);

  function handleSort(columnKey: string) {
    console.log('Sorting by:', columnKey);

    if (sortColumn === columnKey) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  }

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await employeeServices.getEmployees();

        setEmployees(employees);
      } catch (error) {
        console.error('Error fetching employees:', error);
        return [];
      }
    };

    void fetchEmployees();
  }, []);

  return {
    employees: sortedEmployees,
    columns,
    sortColumn,
    sortDirection,
    handleSort,
  };
}
