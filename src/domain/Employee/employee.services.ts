import type { GetEmployeesParams } from './employee.dto';
import * as employeeResources from './employee.resources';
import type { Employee } from './employee.types';

export async function getEmployees(
  queryParams?: GetEmployeesParams
): Promise<Employee[]> {
  const response = await employeeResources.getEmployees(queryParams);
  return response;
}
