import { TableCell, TableRow } from '@/components/Table';
import type { Employee } from '../home.types';
import styles from '../Home.module.css';

interface ExpandedRowProps {
  employee: Employee;
}

export function ExpandedRow({ employee }: ExpandedRowProps) {
  return (
    <TableRow className={styles.expandedRow}>
      <TableCell colSpan={3}>
        <div className={styles.expandedContent}>
          <div className={styles.expandedItem}>
            <span className={styles.label}>Cargo:</span>
            <span>{employee.position}</span>
          </div>
          <div className={styles.expandedItem}>
            <span className={styles.label}>Data de Admissão:</span>
            <span>{employee.admissionDate}</span>
          </div>
          <div className={styles.expandedItem}>
            <span className={styles.label}>Telefone:</span>
            <span>{employee.phone}</span>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
