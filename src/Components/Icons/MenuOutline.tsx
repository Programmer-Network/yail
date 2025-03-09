import type { SVGProps } from "react";

const SvgMenuOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M0 5.5h15m-15-4h15m-15 8h15m-15 4h15' />
  </svg>
);
export default SvgMenuOutline;
