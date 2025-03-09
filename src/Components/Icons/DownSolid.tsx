import type { SVGProps } from "react";

const SvgDownSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M7.5 12 0 4h15z' />
  </svg>
);
export default SvgDownSolid;
