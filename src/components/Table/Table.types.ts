export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export type TextAlign = 'left' | 'center' | 'right';
export type SortDirection = 'asc' | 'desc';

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
  align?: TextAlign;
  sortable?: boolean;
  hideOnMobile?: boolean;
}
