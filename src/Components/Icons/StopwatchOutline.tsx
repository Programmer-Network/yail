import type { SVGProps } from "react";

const SvgStopwatchOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 5v3.5H10m-4-8h3m-1.5 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z'
    />
  </svg>
);
export default SvgStopwatchOutline;
