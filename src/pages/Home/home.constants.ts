import type { Column } from './home.types';

export const COLUMNS: Column[] = [
  {
    key: 'photo',
    label: 'FOTO',
    width: '5%',
    align: 'left',
  },
  {
    key: 'name',
    label: 'NOME',
    align: 'left',
    sortable: true,
  },
  {
    key: 'job',
    label: 'CARGO',
    sortable: true,
    align: 'center',
    hideOnMobile: true,
    width: '25%',
  },
  {
    key: 'admission_date',
    label: 'DATA DE ADMISSÃO',
    sortable: true,
    align: 'left',
    hideOnMobile: true,
    width: '250px',
  },
  {
    key: 'phone',
    label: 'TELEFONE',
    align: 'left',
    hideOnMobile: true,
    width: '200px',
  },
];
