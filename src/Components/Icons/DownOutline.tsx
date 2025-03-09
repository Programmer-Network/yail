import type { SVGProps } from "react";

const SvgDownOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' strokeLinecap='square' d='m14 5-6.5 7L1 5' />
  </svg>
);
export default SvgDownOutline;
