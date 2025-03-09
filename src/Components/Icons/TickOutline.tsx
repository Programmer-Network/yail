import type { SVGProps } from "react";

const SvgTickOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' strokeLinecap='square' d='m1 7 4.5 4.5L14 3' />
  </svg>
);
export default SvgTickOutline;
