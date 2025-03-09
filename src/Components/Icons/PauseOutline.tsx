import type { SVGProps } from "react";

const SvgPauseOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M5.5 3v9m4-9v9' />
  </svg>
);
export default SvgPauseOutline;
