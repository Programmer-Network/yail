import type { SVGProps } from "react";

const SvgStopSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M9.5 5.5h-4v4h4z' />
  </svg>
);
export default SvgStopSmallOutline;
