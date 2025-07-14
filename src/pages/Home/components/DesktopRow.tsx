import { TableCell, TableRow } from '@/components/Table';
import type { Employee } from '../home.types';
import styles from '../Home.module.css';

interface DesktopRowProps {
  employee: Employee;
}

export function DesktopRow({ employee }: DesktopRowProps) {
  return (
    <TableRow>
      <TableCell align="left" width="120px">
        <img
          className={styles.photo}
          src={employee.photo}
          alt={employee.name}
        />
      </TableCell>
      <TableCell align="left">{employee.name}</TableCell>
      <TableCell align="center">{employee.position}</TableCell>
      <TableCell align="center">{employee.admissionDate}</TableCell>
      <TableCell align="center">{employee.phone}</TableCell>
    </TableRow>
  );
}
