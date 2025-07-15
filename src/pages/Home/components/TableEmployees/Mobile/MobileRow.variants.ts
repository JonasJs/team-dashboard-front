import { cva } from 'class-variance-authority';
import styles from './MobileRow.module.css';

export const MobileRowVariants = {
  row: cva('', {
    variants: {
      hideBorder: {
        true: styles.noBorder,
      },
    },
    defaultVariants: {
      hideBorder: false,
    },
  }),
};
