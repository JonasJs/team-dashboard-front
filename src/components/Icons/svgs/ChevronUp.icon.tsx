import { memo } from 'react';
import type { SVGProps } from 'react';

function ChevronUpComponent(props: SVGProps<SVGSVGElement>) {
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
        d="m18 15l-6-6l-6 6"
      ></path>
    </svg>
  );
}

export const ChevronUp = memo(ChevronUpComponent);
ChevronUpComponent.displayName = 'ChevronUp';
