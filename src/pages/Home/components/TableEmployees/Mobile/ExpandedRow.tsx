import { TableCell, TableRow } from '@/components/Table';
import type { Employee } from '@/domain/Employee/employee.types';

import styles from './MobileRow.module.css';
import { formatDate, formatPhoneNumber } from '@/utils/format';
import { motion } from 'framer-motion';

export function ExpandedRow(employee: Employee) {
  return (
    <TableRow>
      <TableCell colSpan={3}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div className={styles.expandedRow}>
            <b>Cargo:</b>
            <span>{employee.job}</span>
          </div>
          <div className={styles.expandedRow}>
            <b>Data de Admissão:</b>
            <span>{formatDate(employee.admission_date)}</span>
          </div>
          <div className={styles.expandedRow}>
            <b>Telefone:</b>
            <span>{formatPhoneNumber(employee.phone)}</span>
          </div>
        </motion.div>
      </TableCell>
    </TableRow>
  );
}
