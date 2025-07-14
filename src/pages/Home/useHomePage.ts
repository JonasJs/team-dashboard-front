import { useEffect, useState } from 'react';
import { employeeServices } from '@/domain';
import type { Employee } from '@/domain/Employee/employee.types';

export function useHomePage() {
  const [employees, setEmployees] = useState<Employee[]>([]);

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
    employees,
  };
}
