import type { SVGProps } from "react";

const SvgFrameSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M3.5 0v15m8-15v15M0 3.5h15m-15 8h15' />
  </svg>
);
export default SvgFrameSolid;
