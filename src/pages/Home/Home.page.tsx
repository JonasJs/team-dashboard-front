import { useState, useMemo } from 'react';
import type { TableColumn } from '@/components/Table/Table.types';
import { Icon, Input, TableHeader } from '@components/index';
import type { SortDirection } from '@/components/Table/TableHeader/TableHeader.types';

import styles from './Home.module.css';

const columns: TableColumn[] = [
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
    align: 'center',
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

  const handleSort = (columnKey: string, direction: SortDirection) => {
    setSortColumn(columnKey);
    setSortDirection(direction);
    console.log(`Ordenando por ${columnKey} em ordem ${direction}`);
  };

  const searchIcon = useMemo(() => <Icon name="search" />, []);

  return (
    <div className="container">
      <div className={styles.content}>
        <h2>{searchValue}</h2>
        <Input
          placeholder="Pesquisar"
          iconRight={searchIcon}
          autoComplete="off"
          spellCheck={false}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />

        <div role="table" aria-label="Cabeçalho da tabela de funcionários">
          <TableHeader
            columns={columns}
            onSort={handleSort}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
          />
        </div>
      </div>
    </div>
  );
}
