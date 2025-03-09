import type { SVGProps } from "react";

const SvgRightOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' strokeLinecap='square' d='m5 14 7-6.5L5 1' />
  </svg>
);
export default SvgRightOutline;
