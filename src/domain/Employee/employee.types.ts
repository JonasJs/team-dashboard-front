export interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

export interface getEmployeesResponse {
  employees: Employee[];
  totalItems: number;
}
