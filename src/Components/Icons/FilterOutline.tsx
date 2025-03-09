import type { SVGProps } from "react";

const SvgFilterOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M0 2.5h15m-12 5h9m-7 5h5' />
  </svg>
);
export default SvgFilterOutline;
