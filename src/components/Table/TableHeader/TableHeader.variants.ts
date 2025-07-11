import { cva } from 'class-variance-authority';
import styles from './TableHeader.module.css';
import type { TextAlign } from '../Table.types';

const alignVariants: Record<TextAlign, string> = {
  left: styles.alignLeft,
  center: styles.alignCenter,
  right: styles.alignRight,
};

export const tableHeaderCellVariants = cva(styles.cell, {
  variants: {
    sortable: {
      true: styles.sortable,
    },
    textAlign: alignVariants,
    hasFixedWidth: {
      true: styles.fixedWidth,
    },
  },
  defaultVariants: {
    textAlign: 'left',
  },
});
