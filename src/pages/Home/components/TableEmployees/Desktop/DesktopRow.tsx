import { TableCell, TableRow } from '@/components/Table';

import type { Employee } from '@/domain/Employee/employee.types';

import stylesTable from '../TableEmployees.module.css';
import { formatDate, formatPhoneNumber } from '@/utils/format';

export function DesktopRow(employee: Employee) {
  return (
    <TableRow>
      <TableCell align="left" width="120px">
        <div className={stylesTable.alignCenter}>
          <img
            width={34}
            height={34}
            className={stylesTable.photo}
            src={employee.image}
            alt={employee.name}
            loading="lazy"
          />
        </div>
      </TableCell>
      <TableCell align="left">{employee.name}</TableCell>
      <TableCell align="left">{employee.job}</TableCell>
      <TableCell align="left">{formatDate(employee.admission_date)}</TableCell>
      <TableCell align="center">{formatPhoneNumber(employee.phone)}</TableCell>
    </TableRow>
  );
}
