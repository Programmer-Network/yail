import type { SVGProps } from "react";

const SvgPlayOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' strokeLinejoin='round' d='M4.5 12.5v-10l7 5z' />
  </svg>
);
export default SvgPlayOutline;
