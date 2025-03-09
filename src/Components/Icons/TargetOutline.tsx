import type { SVGProps } from "react";

const SvgTargetOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M.5 7.5a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z' />
    <path stroke='currentColor' d='M3.5 7.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z' />
    <path stroke='currentColor' d='M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z' />
  </svg>
);
export default SvgTargetOutline;
