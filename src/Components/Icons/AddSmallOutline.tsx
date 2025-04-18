import type { SVGProps } from "react";

const SvgAddSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M7.5 4v7M4 7.5h7' />
  </svg>
);
export default SvgAddSmallOutline;
