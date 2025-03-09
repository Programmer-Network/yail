import type { SVGProps } from "react";

const SvgToggleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M3.5 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z' />
    <path
      stroke='currentColor'
      d='M11.5.5h-8a3 3 0 0 0 0 6h8a3 3 0 1 0 0-6ZM11.5 12.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'
    />
    <path
      stroke='currentColor'
      d='M3.5 14.5h8a3 3 0 1 0 0-6h-8a3 3 0 0 0 0 6Z'
    />
  </svg>
);
export default SvgToggleOutline;
