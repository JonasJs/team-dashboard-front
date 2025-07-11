import type { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconRight?: ReactNode;
  ref?: React.RefObject<HTMLInputElement | null>;
}
