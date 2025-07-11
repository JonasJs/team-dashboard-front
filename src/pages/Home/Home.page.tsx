import { useState } from 'react';
import type { TableColumn } from '@/components/Table/Table.types';
import { TableHeader } from '@components/index';
import type { SortDirection } from '@/components/Table/TableHeader/TableHeader.types';

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
  const [sortColumn, setSortColumn] = useState<string>();
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (columnKey: string, direction: SortDirection) => {
    setSortColumn(columnKey);
    setSortDirection(direction);

    // Aqui você implementaria a lógica de ordenação dos dados
    console.log(`Ordenando por ${columnKey} em ordem ${direction}`);
  };

  return (
    <div className="container">
      <TableHeader
        columns={columns}
        onSort={handleSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
    </div>
  );
}
