import type { SVGProps } from 'react';
import type { ICON_MAP } from './Icons.utils';

export type IconName = keyof typeof ICON_MAP;

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  name: IconName;
  size?: number | string;
  color?: string;
}
