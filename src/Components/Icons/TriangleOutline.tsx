import type { SVGProps } from "react";

const SvgTriangleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' strokeLinejoin='round' d='m7.5 1.5-7 12h14z' />
  </svg>
);
export default SvgTriangleOutline;
