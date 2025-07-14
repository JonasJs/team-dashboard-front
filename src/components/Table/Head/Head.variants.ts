import { cva } from 'class-variance-authority';
import styles from './Head.module.css';
import stylesTable from '../Table.module.css';
import type { TextAlign } from '../Table.types';

const alignVariants: Record<TextAlign, string> = {
  left: stylesTable.alignLeft,
  center: stylesTable.alignCenter,
  right: stylesTable.alignRight,
};

export const HeadVariants = cva(styles.headContent, {
  variants: {
    textAlign: alignVariants,
  },
  defaultVariants: {
    textAlign: 'left',
  },
});
