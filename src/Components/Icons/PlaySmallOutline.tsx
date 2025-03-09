import type { SVGProps } from "react";

const SvgPlaySmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' strokeLinejoin='round' d='M6.5 9.5v-4l3.5 2z' />
  </svg>
);
export default SvgPlaySmallOutline;
