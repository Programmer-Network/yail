import type { SVGProps } from "react";

const SvgLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' strokeLinecap='square' d='M10 14 3 7.5 10 1' />
  </svg>
);
export default SvgLeftOutline;
