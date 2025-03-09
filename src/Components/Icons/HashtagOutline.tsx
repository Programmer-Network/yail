import type { SVGProps } from "react";

const SvgHashtagOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M2 5.5h11m-11 4h11m-6.5-8-2 12m6-12-2 12' />
  </svg>
);
export default SvgHashtagOutline;
