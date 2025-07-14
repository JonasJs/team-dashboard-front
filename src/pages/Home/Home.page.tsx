import { useState, useMemo } from 'react';
import { Icon, Input } from '@components/index';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  type TextAlign,
} from '@/components/Table';

import styles from './Home.module.css';
import { useHomePage } from './useHomePage';

type SortDirection = 'asc' | 'desc';

interface Column {
  key: string;
  label: string;
  width?: string;
  align: TextAlign;
  sortable?: boolean;
  hideOnMobile?: boolean;
}

const COLUMNS: Column[] = [
  {
    key: 'photo',
    label: 'FOTO',
    width: '120px',
    align: 'left',
  },
  {
    key: 'name',
    label: 'NOME',
    align: 'left',
    sortable: true,
  },
  {
    key: 'position',
    label: 'CARGO',
    sortable: true,
    align: 'center',
    hideOnMobile: true,
  },
  {
    key: 'admissionDate',
    label: 'DATA DE ADMISSÃO',
    sortable: true,
    align: 'right',
    hideOnMobile: true,
  },
  {
    key: 'phone',
    label: 'TELEFONE',
    align: 'center',
    hideOnMobile: true,
  },
];

export function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const [sortColumn, setSortColumn] = useState<string>();
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const { employees } = useHomePage();
  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const searchIcon = useMemo(() => <Icon name="search" />, []);

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Funcionários</h1>
          <Input
            placeholder="Pesquisar"
            iconRight={searchIcon}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
        <h1>{searchValue}</h1>

        <Table role="table" aria-label="Tabela de funcionários">
          <TableHeader>
            <TableRow>
              {COLUMNS.map((column) => (
                <TableHead
                  key={column.key}
                  columnKey={column.key}
                  sortable={column.sortable}
                  width={column.width}
                  align={column.align}
                  sortDirection={
                    sortColumn === column.key ? sortDirection : undefined
                  }
                  onSort={handleSort}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell align="left" width="120px">
                  <img
                    className={styles.photo}
                    src={employee.image}
                    alt={employee.name}
                  />
                </TableCell>
                <TableCell align="left">{employee.name}</TableCell>
                <TableCell align="center">{employee.job}</TableCell>
                <TableCell align="center">{employee.admission_date}</TableCell>
                <TableCell align="center">{employee.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div
        style={{
          height: '1000px',
        }}
      ></div>
    </div>
  );
}
