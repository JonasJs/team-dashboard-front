import { Icon } from '@components/index';
import { TableCell, TableRow } from '@/components/Table';
import type { Employee } from '../home.types';
import styles from '../Home.module.css';
import { ExpandedRow } from './ExpandedRow';

interface MobileRowProps {
  employee: Employee;
  isExpanded: boolean;
  onExpand: (id: string) => void;
}

export function MobileRow({ employee, isExpanded, onExpand }: MobileRowProps) {
  return [
    <TableRow key={employee.id}>
      <TableCell align="left" width="120px">
        <img
          className={styles.photo}
          src={employee.photo}
          alt={employee.name}
        />
      </TableCell>
      <TableCell align="left">{employee.name}</TableCell>
      <TableCell align="center" width="48px">
        <button
          onClick={() => {
            onExpand(employee.id);
          }}
          className={styles.expandButton}
        >
          <Icon name={isExpanded ? 'chevron-up' : 'chevrons-down'} size={20} />
        </button>
      </TableCell>
    </TableRow>,
    isExpanded && (
      <ExpandedRow key={`${employee.id}-expanded`} employee={employee} />
    ),
  ].filter(Boolean);
}
