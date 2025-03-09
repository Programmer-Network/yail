import type { SVGProps } from "react";

const SvgClockwiseOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M14 8.495v-.5h-1v.5zM7.5 2.999H8v-1h-.5zm1-.5.353.353.354-.353-.354-.354zM13 8.495a5.5 5.5 0 0 1-5.5 5.496v1c3.589 0 6.5-2.909 6.5-6.496zM7.5 13.99A5.5 5.5 0 0 1 2 8.495H1a6.5 6.5 0 0 0 6.5 6.496zM2 8.495a5.5 5.5 0 0 1 5.5-5.496v-1A6.5 6.5 0 0 0 1 8.495zM6.147.854l2 1.998.706-.707-2-1.999zm2 1.291-2 1.999.706.707 2-1.999z'
    />
  </svg>
);
export default SvgClockwiseOutline;
