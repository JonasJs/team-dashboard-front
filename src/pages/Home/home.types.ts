import type { TextAlign } from '@/components/Table';

export type SortDirection = 'asc' | 'desc';

export interface Column {
  key: string;
  label: string;
  width?: string;
  align: TextAlign;
  sortable?: boolean;
  hideOnMobile?: boolean;
}

export interface Employee {
  id: string;
  photo: string;
  name: string;
  position: string;
  admissionDate: string;
  phone: string;
}
