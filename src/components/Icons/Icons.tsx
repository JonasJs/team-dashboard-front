import { memo } from 'react';
import type { IconProps } from './Icons.types';
import { ICON_MAP } from './Icons.utils';

function IconComponent({
  name,
  size = 24,
  color = 'currentColor',
  className,
  style,
  ...props
}: IconProps) {
  const CurrentIconComponent = ICON_MAP[name];

  return (
    <CurrentIconComponent
      width={size}
      height={size}
      style={{
        color,
        ...style,
      }}
      className={className}
      {...props}
    />
  );
}

export const Icon = memo(IconComponent);
Icon.displayName = 'Icon';
