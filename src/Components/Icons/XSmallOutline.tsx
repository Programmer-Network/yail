import type { SVGProps } from "react";

const SvgXSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='m4.5 4.5 6 6m-6 0 6-6' />
  </svg>
);
export default SvgXSmallOutline;
