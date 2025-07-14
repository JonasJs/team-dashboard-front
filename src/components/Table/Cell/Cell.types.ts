import type { TextAlign } from '../Table.types';

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  width?: string;
  align?: TextAlign;
}
