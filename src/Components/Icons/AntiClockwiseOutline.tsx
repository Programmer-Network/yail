import type { SVGProps } from "react";

const SvgAntiClockwiseOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m6.5 2.499-.354-.354-.353.354.353.353zm1-.5H7v1h.5zM2 8.495v-.5H1v.5zM8.145.146l-1.999 2 .708.706L8.853.854zM6.146 2.852l2 1.999.707-.707-2-1.999zM7.5 3c3.037 0 5.5 2.461 5.5 5.496h1a6.5 6.5 0 0 0-6.5-6.496zM13 8.495a5.5 5.5 0 0 1-5.5 5.496v1c3.589 0 6.5-2.909 6.5-6.496zM7.5 13.99A5.5 5.5 0 0 1 2 8.495H1a6.5 6.5 0 0 0 6.5 6.496z'
    />
  </svg>
);
export default SvgAntiClockwiseOutline;
