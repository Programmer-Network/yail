import type { SVGProps } from "react";

const SvgTickSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M4 7.5 7 10l4-5' />
  </svg>
);
export default SvgTickSmallOutline;
