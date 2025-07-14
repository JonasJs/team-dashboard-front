import * as employeeResources from './employee.resources';
import type { Employee } from './employee.types';

export async function getEmployees(): Promise<Employee[]> {
  const response = await employeeResources.getEmployees();
  return response;
}
