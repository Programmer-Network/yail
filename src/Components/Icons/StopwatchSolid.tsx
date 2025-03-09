import type { SVGProps } from "react";

const SvgStopwatchSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M9 1H6V0h3z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M8 8V5H7v4h3V8z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgStopwatchSolid;
