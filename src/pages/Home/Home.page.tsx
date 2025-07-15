import { useHomePage } from './useHomePage';
import { TableEmployees } from './components/TableEmployees/TableEmployees';
import { Icon, Input } from '@/components';
import { useMemo } from 'react';

import styles from './Home.module.css';

export function HomePage() {
  const {
    columns,
    employees,
    handleSort,
    sortColumn,
    sortDirection,
    setSearchTerm,
    searchTerm,
  } = useHomePage();

  const searchIcon = useMemo(() => <Icon name="search" />, []);

  return (
    <div className={`${styles.home} container`}>
      <div className={styles.header}>
        <h1>Funcionários</h1>
        <Input
          name="search"
          value={searchTerm}
          placeholder="Pesquisar"
          iconRight={searchIcon}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
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
