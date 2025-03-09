import type { SVGProps } from "react";

const SvgDownSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' strokeLinecap='square' d='m4.5 6.5 3 3 3-3' />
  </svg>
);
export default SvgDownSmallOutline;
