import { cva } from 'class-variance-authority';
import styles from './Pagination.module.css';

export const pageButton = cva(styles.pageButton, {
  variants: {
    active: {
      true: 'active',
    },
    disabled: {
      true: 'disabled',
    },
  },
});
