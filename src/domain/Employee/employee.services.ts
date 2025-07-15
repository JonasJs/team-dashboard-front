import type { GetEmployeesParams } from './employee.dto';
import * as employeeResources from './employee.resources';
import type { Employee, getEmployeesResponse } from './employee.types';

export async function getEmployees(
  queryParams?: GetEmployeesParams
): Promise<getEmployeesResponse> {
  const response = await employeeResources.getEmployees(queryParams);

  console.log(response);
  const totalCount = response.headers.get('X-Total-Count') ?? '10';
  console.log('totalCount => ', totalCount);

  const employees = await response.json<Employee[]>();

  return {
    employees,
    totalItems: parseInt(totalCount),
  };
}
