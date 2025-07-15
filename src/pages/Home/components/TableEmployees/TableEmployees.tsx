import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table';

import styles from './TableEmployees.module.css';

import type { TableEmployeesProps } from './TableEmployees.types';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileRow } from './Mobile/MobileRow';
import { useState } from 'react';
import { DesktopRow } from './Desktop/DesktopRow';
import type { SortDirection } from '@/components/Table/Table.types';

export function TableEmployees({
  columns,
  employees,
  onSort,
  sortColumn,
  sortDirection,
}: TableEmployeesProps) {
  const isMobile = useIsMobile();
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  function handleExpandRow(employeeId: number) {
    setExpandedRows((prev) =>
      prev.includes(employeeId)
        ? prev.filter((id) => id !== employeeId)
        : [...prev, employeeId]
    );
  }

  function handleSort(columnKey: string, direction: SortDirection) {
    if (onSort) {
      onSort(columnKey, direction);
    }
  }

  return (
    <Table
      className={styles.table}
      role="table"
      aria-label="Tabela de funcionários"
    >
      <TableHeader className={styles.tableHeader}>
        <TableRow>
          {columns.map((column) => (
            <TableHead
              key={column.key}
              columnKey={column.key}
              sortable={column.sortable}
              sortDirection={
                sortColumn === column.key ? sortDirection : undefined
              }
              onSort={handleSort}
              width={column.width}
              align={column.align}
            >
              {column.label}
            </TableHead>
          ))}

          {isMobile && (
            <TableHead align="center" width="48px">
              <div className={styles.actionCircle}></div>
            </TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody className={styles.body}>
        {employees.map((employee) =>
          isMobile ? (
            <MobileRow
              key={employee.id}
              employee={employee}
              isExpanded={expandedRows.includes(employee.id)}
              onExpand={handleExpandRow}
            />
          ) : (
            <DesktopRow key={employee.id} {...employee} />
          )
        )}
      </TableBody>
    </Table>
  );
}
