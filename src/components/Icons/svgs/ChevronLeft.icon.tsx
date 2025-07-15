import { memo } from 'react';
import type { SVGProps } from 'react';

function ChevronLeftComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m15 18l-6-6l6-6"
      ></path>
    </svg>
  );
}

export const ChevronLeft = memo(ChevronLeftComponent);
ChevronLeftComponent.displayName = 'ChevronLeft';
