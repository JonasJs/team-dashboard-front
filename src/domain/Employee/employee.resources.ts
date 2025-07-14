import { api } from '@/http/api';
import type { Employee } from './employee.types';

export async function getEmployees(): Promise<Employee[]> {
  return api.get('employees').json<Employee[]>();
}
