import type { SVGProps } from "react";

const SvgCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M.5 7.5a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z' />
  </svg>
);
export default SvgCircleOutline;
