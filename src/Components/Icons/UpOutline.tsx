import type { SVGProps } from "react";

const SvgUpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' strokeLinecap='square' d='m1 10 6.5-7 6.5 7' />
  </svg>
);
export default SvgUpOutline;
