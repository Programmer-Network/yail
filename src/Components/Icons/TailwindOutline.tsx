import type { SVGProps } from "react";

const SvgTailwindOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M7.5 3Q4.7 3 4 6q1.05-1.5 2.45-1.125c.533.143.913.557 1.334 1.015C8.471 6.636 9.265 7.5 11 7.5q2.8 0 3.5-3-1.05 1.5-2.45 1.125c-.533-.143-.913-.557-1.334-1.015C10.029 3.864 9.235 3 7.5 3ZM4 7.5q-2.8 0-3.5 3Q1.55 9 2.95 9.375c.533.143.913.557 1.334 1.015C4.971 11.136 5.765 12 7.5 12q2.8 0 3.5-3-1.05 1.5-2.45 1.125c-.533-.143-.913-.557-1.334-1.015C6.529 8.364 5.735 7.5 4 7.5Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTailwindOutline;
