import type { SVGProps } from "react";

const SvgAlignTopOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M15 .5H0m11.5 3h-3v7h3zm-5 0h-3v11h3z' />
  </svg>
);
export default SvgAlignTopOutline;
