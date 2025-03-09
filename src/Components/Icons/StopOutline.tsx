import type { SVGProps } from "react";

const SvgStopOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M11.5 3.5h-8v8h8z' />
  </svg>
);
export default SvgStopOutline;
