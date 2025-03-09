import type { SVGProps } from "react";

const SvgLeftSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' strokeLinecap='square' d='m8.5 4.5-3 3 3 3' />
  </svg>
);
export default SvgLeftSmallOutline;
