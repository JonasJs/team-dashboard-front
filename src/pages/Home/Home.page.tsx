import { useHomePage } from './useHomePage';
import { TableEmployees } from './components/TableEmployees/TableEmployees';
import { Icon, Input } from '@/components';
import { useMemo } from 'react';

import styles from './Home.module.css';

export function HomePage() {
  const { columns, employees, handleSort, sortColumn, sortDirection } =
    useHomePage();

  const searchIcon = useMemo(() => <Icon name="search" />, []);

  return (
    <div className="container">
      <div className={styles.header}>
        <h1>Funcionários</h1>
        <Input placeholder="Pesquisar" iconRight={searchIcon} />
      </div>
      <TableEmployees
        columns={columns}
        employees={employees}
        onSort={handleSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
    </div>
  );
}
