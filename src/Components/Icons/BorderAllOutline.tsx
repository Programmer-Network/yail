import type { SVGProps } from "react";

const SvgBorderAllOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M7.5 1.5v12m-6-6h12m-12-6h12v12h-12z' />
  </svg>
);
export default SvgBorderAllOutline;
