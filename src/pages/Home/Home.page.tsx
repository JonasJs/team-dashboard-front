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

type SortDirection = 'asc' | 'desc';

interface Column {
  key: string;
  label: string;
  width?: string;
  align: TextAlign;
  sortable?: boolean;
  hideOnMobile?: boolean;
}

interface Employee {
  id: string;
  photo: string;
  name: string;
  position: string;
  admissionDate: string;
  phone: string;
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

const EMPLOYEES: Employee[] = [
  {
    id: 'EMP001',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'João Silva',
    position: 'Desenvolvedor Front-end',
    admissionDate: '2021-03-15',
    phone: '(11) 91234-5678',
  },
];

export function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const [sortColumn, setSortColumn] = useState<string>();
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

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
            {EMPLOYEES.map((employee) => (
              <TableRow key={employee.id}>
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
