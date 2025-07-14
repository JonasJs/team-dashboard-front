import type { Column, Employee } from './home.types';

export const COLUMNS: Column[] = [
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

export const EMPLOYEES: Employee[] = [
  {
    id: 'EMP001',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'João Silva',
    position: 'Desenvolvedor Front-end',
    admissionDate: '2021-03-15',
    phone: '(11) 91234-5678',
  },
  {
    id: 'EMP002',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Maria Oliveira',
    position: 'Product Manager',
    admissionDate: '2020-07-22',
    phone: '(21) 99876-5432',
  },
  {
    id: 'EMP003',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'Carlos Souza',
    position: 'UX Designer',
    admissionDate: '2019-11-10',
    phone: '(31) 98888-1122',
  },
];
