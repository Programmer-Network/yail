import type { SVGProps } from "react";

const SvgXOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='m1.5 1.5 12 12m-12 0 12-12' />
  </svg>
);
export default SvgXOutline;
