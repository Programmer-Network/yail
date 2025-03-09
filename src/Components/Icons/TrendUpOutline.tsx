import type { SVGProps } from "react";

const SvgTrendUpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M.5 11.5 5 7l3 3 6.5-6.5m0 0V10m0-6.5H8' />
  </svg>
);
export default SvgTrendUpOutline;
