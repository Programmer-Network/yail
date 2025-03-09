import type { SVGProps } from "react";

const SvgPauseSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M6.5 5v5m2-5v5' />
  </svg>
);
export default SvgPauseSmallOutline;
