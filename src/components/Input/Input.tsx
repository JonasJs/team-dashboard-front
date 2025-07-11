import { memo } from 'react';
import type { InputProps } from './Input.types';
import styles from './Input.module.css';

const InputComponent = ({
  ref,
  placeholder,
  iconRight: IconRight,
  className,
  ...rest
}: InputProps) => {
  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      <input
        ref={ref}
        aria-label={placeholder}
        placeholder={placeholder}
        {...rest}
      />
      {IconRight && <div className={styles.iconRight}>{IconRight}</div>}
    </div>
  );
};

export const Input = memo(InputComponent);
InputComponent.displayName = 'Input';
