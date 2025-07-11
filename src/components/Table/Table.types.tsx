export type TextAlign = 'left' | 'center' | 'right';

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
  align?: TextAlign;
  sortable?: boolean;
  hideOnMobile?: boolean;
}
